package naver.tpdms0169.todo_server.CRUD.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.text.DateFormat;
import java.util.Date;

@Entity
@Getter
@Setter
public class TodoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;
    private String title;
    private String text;
    private String state;
    private String show_yn;
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date deadline;

    @UpdateTimestamp
    private Date createDate;



}
