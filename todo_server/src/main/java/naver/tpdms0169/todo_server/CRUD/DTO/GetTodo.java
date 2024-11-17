package naver.tpdms0169.todo_server.CRUD.DTO;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class GetTodo {

    private Long id;
    private String username;
    private String title;
    private String text;
    private String state;

    private String deadline;

}
