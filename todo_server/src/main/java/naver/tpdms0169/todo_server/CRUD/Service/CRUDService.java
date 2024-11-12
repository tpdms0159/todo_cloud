package naver.tpdms0169.todo_server.CRUD.Service;

import jakarta.persistence.Id;
import naver.tpdms0169.todo_server.CRUD.DTO.CreateUpdateDTO;
import naver.tpdms0169.todo_server.CRUD.DTO.DeleteDTO;
import naver.tpdms0169.todo_server.CRUD.DTO.GetTodo;
import naver.tpdms0169.todo_server.CRUD.Entity.TodoEntity;
import naver.tpdms0169.todo_server.CRUD.Repository.CRUDRepository;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CRUDService  {
    CRUDRepository crudRepository;

    public CRUDService (CRUDRepository crudRepository) {
        this.crudRepository = crudRepository;
    }

    // create api
    public Boolean createTodo (CreateUpdateDTO createDTO) throws ParseException {
        System.out.println(createDTO.getTitle());
        String username = createDTO.getUsername();
        String title = createDTO.getTitle();
        String text = createDTO.getText();
        String state = "none";
        String show_yn = "N";
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy년 MM월 dd일");
        Date deadline = formatter.parse(createDTO.getDeadline());


        System.out.println("deadline:" + deadline);

        if (username == null || title == null || text == null) {
            return false;
        }

        TodoEntity todo = new TodoEntity();
        todo.setUsername(username);
        todo.setTitle(title);
        todo.setText(text);
        todo.setDeadline(deadline);
        todo.setState(state);
        todo.setShow_yn(show_yn);

        try {
            crudRepository.save(todo);
            return true;
        } catch (Exception e) {
            return false;
        }




    }

    // read api
    public List<GetTodo> readTodo (String username) {
        System.out.println("username:" + username);

        List<TodoEntity> result = crudRepository.findByUsername(username);

        int length = result.size();
        List<GetTodo> data = new ArrayList<>();

        if (length == 0) {
            return new ArrayList<GetTodo>();
        }

        for (int i = 0; i < length; i++) {
            if (result.get(i).getShow_yn() != "N") {
                GetTodo get = new GetTodo();

                get.setId(result.get(i).getId());
                get.setUsername(result.get(i).getUsername());
                get.setTitle(result.get(i).getTitle());
                get.setText(result.get(i).getText());
                get.setState(result.get(i).getState());
                get.setShow_yn(result.get(i).getShow_yn());
                get.setCreateDate(result.get(i).getCreateDate());

                data.add(get);
            }
        }

        return data;
    }

    // update api
    public Boolean updateTodo (GetTodo getTodo) {
        Long id = getTodo.getId();
        String username = getTodo.getUsername();

        // 해당하는 게시글 존재 여부 확인하기
        Boolean isExist = crudRepository.existsByIdAndUsername(id, username);

        if (!isExist) {
            return null;
        }

        // 해당 게시글 업데이트하기
        TodoEntity update = new TodoEntity();
        update.setId(getTodo.getId());
        update.setTitle(getTodo.getTitle());
        update.setText(getTodo.getText());
        update.setState(getTodo.getState());
        update.setShow_yn(getTodo.getShow_yn());
        update.setCreateDate(new Date());

        crudRepository.save(update);

        return true;
    }


    // delete api
    public String deleteTodo (DeleteDTO deleteDTO) {
        // 해당 게시글이 있는지 확인
        Boolean exist = crudRepository.existsById(deleteDTO.getId());
        // 없으면 return
        if(!exist) {
            return "No todo";
        }

        // 사용자와 작성자가 동일한 경우 삭제 진행
        String writter = crudRepository.findById(deleteDTO.getId()).getUsername();

        if (!writter.equals(deleteDTO.getUsername())) {
            return "writter and username do not equal";
        }

        // 있으면 삭제
        try {
            crudRepository.deleteById(deleteDTO.getId().toString());
            return "delete success";
        } catch (Exception e) {
            return "delete fail";
        }

    }

}
