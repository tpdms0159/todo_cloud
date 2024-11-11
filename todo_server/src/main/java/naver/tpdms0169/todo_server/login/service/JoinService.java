package naver.tpdms0169.todo_server.login.service;

import jakarta.servlet.http.HttpServletResponse;
import naver.tpdms0169.todo_server.login.DTO.JoinDTO;
import naver.tpdms0169.todo_server.login.Repository.UserRepository;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JoinService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final HttpServletResponse httpServletResponse;

    public JoinService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder, HttpServletResponse httpServletResponse) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.httpServletResponse = httpServletResponse;
    }

    public String JoinProcess (JoinDTO joinDTO) {
        // username 또는 password 값이 없는 경우
        if (joinDTO.getUsername() == null || joinDTO.getPassword() == null) {
            return "request username and password";
        }
        String username = joinDTO.getUsername();

        Boolean isExist = userRepository.existsByUsername(username);
        // 중복되는 username 존재 시 종료
        if (isExist) {

            return "user is already exist";
        }

        UserEntity data = new UserEntity();

        data.setUsername(username);
        data.setPassword(bCryptPasswordEncoder.encode(joinDTO.getPassword()));
        data.setRole("ROLE_ADMIN");

        try{
            userRepository.save(data);
            return "join success";
        } catch (Exception e) {
            return "join failed";
        }
    }
}
