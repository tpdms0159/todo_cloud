package naver.tpdms0169.todo_server.login.service;

import naver.tpdms0169.todo_server.login.DTO.JoinDTO;
import naver.tpdms0169.todo_server.login.Repository.UserRepository;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JoinService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public JoinService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public UserEntity JoinProcess (JoinDTO joinDTO) {
        String username = joinDTO.getUsername();

        Boolean isExist = userRepository.existsByUsername(username);
        // 중복되는 username 존재 시 종료
        if (isExist) {
            return null;
        }

        UserEntity data = new UserEntity();

        data.setUsername(username);
        data.setPassword(bCryptPasswordEncoder.encode(joinDTO.getPassword()));
        data.setRole("ROLE_ADMIN");

        return userRepository.save(data);
    }
}
