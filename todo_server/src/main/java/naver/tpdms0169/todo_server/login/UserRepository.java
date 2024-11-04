package naver.tpdms0169.todo_server.login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface UserRepository extends JpaRepository<UserEntity, String> {
    public UserEntity findByUsername(String username);
}
