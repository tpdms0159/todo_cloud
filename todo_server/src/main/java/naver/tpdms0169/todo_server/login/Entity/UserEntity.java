package naver.tpdms0169.todo_server.login.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Entity
@Getter
@Setter
public class UserEntity {
    @Id
    private String username;

    private String password;
    private String role;

}
