package naver.tpdms0169.todo_server;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    // getters and setters
}
