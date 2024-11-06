package naver.tpdms0169.todo_server.CRUD.Service;

import naver.tpdms0169.todo_server.CRUD.DTO.CreateDTO;
import naver.tpdms0169.todo_server.CRUD.Entity.TodoEntity;
import naver.tpdms0169.todo_server.CRUD.Repository.CRUDRepository;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import org.springframework.stereotype.Service;

@Service
public class CRUDService {
    CRUDRepository crudRepository;

    public CRUDService (CRUDRepository crudRepository) {
        this.crudRepository = crudRepository;
    }

    // create api
    public String createTodo (CreateDTO createDTO) {
        String username = createDTO.getUsername();
        String title = createDTO.getTitle();
        String text = createDTO.getText();
        String state = "none";
        String show_yn = "N";

        if (username == null || title == null || text == null) {
            return "no info";
        }

        TodoEntity todo = new TodoEntity();
        todo.setUsername(username);
        todo.setTitle(title);
        todo.setText(text);
        todo.setState(state);
        todo.setShow_yn(show_yn);

        System.out.println(crudRepository.save(todo));

        return "true";
    }
}
