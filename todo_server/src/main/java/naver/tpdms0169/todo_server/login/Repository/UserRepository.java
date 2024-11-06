package naver.tpdms0169.todo_server.login.Repository;

import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<UserEntity, String> {
    // usename 을 받아서 해당 계정이 있는지 확인
    Boolean existsByUsername(String username);

    // username 을 받아 DB 테이블에서 회원을 조회하는 메서드 작성
    UserEntity findByUsername(String username);
}
