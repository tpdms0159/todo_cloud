package naver.tpdms0169.todo_server.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    // 아이디 비밀번호 일치 확인
    public boolean getPassword (String username, String password) {
        UserEntity getPassword = userRepository.findByUsername(username);
        if (getPassword != null && getPassword.getPassword() != null && getPassword.getPassword().equals(password)) {
            return true;
        }
        else { return  false;}
    }
}
