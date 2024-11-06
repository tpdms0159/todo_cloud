package naver.tpdms0169.todo_server.login.service;

import naver.tpdms0169.todo_server.login.DTO.JoinDTO;
import naver.tpdms0169.todo_server.login.Repository.UserRepository;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import org.springframework.stereotype.Service;

@Service
public class JoinService {
    private final UserRepository userRepository;

    public JoinService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void JoinProcess (JoinDTO joinDTO) {
        String username = joinDTO.getUsername();
        String password = joinDTO.getPassword();

        Boolean isExist = userRepository.existsByUsername(username);

        // 중복되는 username 존재 시 종료
        if (isExist) {
            return;
        }

        UserEntity data = new UserEntity();

        data.setUsername(username);
        data.setPassword(password);
        data.setRole("ROLE_ADMIN");

        userRepository.save(data);
    }
}
