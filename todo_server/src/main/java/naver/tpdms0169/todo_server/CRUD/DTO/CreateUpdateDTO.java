package naver.tpdms0169.todo_server.CRUD.DTO;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateUpdateDTO {

    private String username;
    private String title;
    private String text;
}
