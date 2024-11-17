package naver.tpdms0169.todo_server.CRUD.Service;

import jakarta.persistence.Id;
import naver.tpdms0169.todo_server.CRUD.DTO.CreateUpdateDTO;
import naver.tpdms0169.todo_server.CRUD.DTO.DeleteDTO;
import naver.tpdms0169.todo_server.CRUD.DTO.GetTodo;
import naver.tpdms0169.todo_server.CRUD.Entity.TodoEntity;
import naver.tpdms0169.todo_server.CRUD.Repository.CRUDRepository;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CRUDService  {
    CRUDRepository crudRepository;
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy년 MM월 dd일");

    public CRUDService (CRUDRepository crudRepository) {
        this.crudRepository = crudRepository;
    }

    // create api
    public Boolean createTodo (CreateUpdateDTO createDTO) {
        System.out.println(createDTO.getTitle());
        String username = createDTO.getUsername();
        String title = createDTO.getTitle();
        String text = createDTO.getText();
        String state = "none";
        String show_yn = "Y";

        // 날짜 형식 변환
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy년 MM월 dd일");
        Date deadline;
        try {
            deadline = formatter.parse(createDTO.getDeadline());
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        System.out.println("deadline:" + deadline);
        // 빠진 값이 있을 경우 return
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
    public List<GetTodo> readTodo (String username, String deadline) {
        System.out.println("username:" + username);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy년 MM월 dd일");
        Date dateDeadline;
        try {
            dateDeadline = formatter.parse(deadline);
            System.out.println(dateDeadline);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        List<TodoEntity> result = crudRepository.getTodo(username, dateDeadline);
        int length = result.size();
        List<GetTodo> data = new ArrayList<>();

        if (length == 0) {
            return new ArrayList<GetTodo>();
        }

        System.out.println(result.get(0).getShow_yn());
        // entity ->dto
        for (int i = 0; i < length; i++) {
            if (result.get(i).getShow_yn().equals("Y")) {
                GetTodo get = new GetTodo();

                get.setId(result.get(i).getId());
                get.setUsername(result.get(i).getUsername());
                get.setTitle(result.get(i).getTitle());
                get.setText(result.get(i).getText());
                get.setState(result.get(i).getState());
                get.setDeadline(formatter.format(result.get(i).getDeadline()));

                data.add(get);
            }
        }
        return data;
    }

    // update api
    // 상태, deadline 수정
    public Boolean updateTodo (GetTodo getTodo) {
        Long id = getTodo.getId();
        String username = getTodo.getUsername();

        // 해당하는 게시글 존재 여부 확인하기
        Boolean isExist = crudRepository.existsByIdAndUsername(id, username);
        Date dateDeadline;

        // string -> date 형 변환
        try {
            dateDeadline = formatter.parse(getTodo.getDeadline());
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        if (!isExist) {
            return null;
        }

        int result = crudRepository.updateTodo(
                getTodo.getId(),
                getTodo.getUsername(),
                getTodo.getTitle(),
                getTodo.getText(),
                getTodo.getState(),
                dateDeadline
        );

        System.out.println(result);
        return true;
    }

    // delete api
    public String deleteTodo (DeleteDTO deleteDTO) {
        System.out.println("delete id: " + deleteDTO.getId().toString());
        // 해당 게시글이 있는지 확인
        Boolean exist = crudRepository.existsById(Long.parseLong(deleteDTO.getId()));


        // 없으면 return
        if(!exist) {
            return "No todo";
        }

        // 사용자와 작성자가 동일한 경우 삭제 진행
//        System.out.println(crudRepository.findById(deleteDTO.getId()).get().getUsername());
        String writter = crudRepository.findById(deleteDTO.getId()).get().getUsername();

        if (!writter.equals(deleteDTO.getUsername())) {
            return "writter and username do not equal";
        }

        // 있으면 삭제
        System.out.println("delete todo? ");

        try {
            int result = crudRepository.deleteTodo( Long.parseLong(deleteDTO.getId()) );
            System.out.println(result);

            return "delete success";
        } catch (Exception e) {
            return "delete fail";
        }

    }

}
