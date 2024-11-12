package naver.tpdms0169.todo_server.CRUD.DTO;


import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Getter
@Setter
public class CreateUpdateDTO {

    private String username;
    private String title;
    private String text;
    private String deadline;
    private String state;

}
