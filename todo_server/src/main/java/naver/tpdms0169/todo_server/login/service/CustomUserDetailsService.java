package naver.tpdms0169.todo_server.login.service;

import naver.tpdms0169.todo_server.login.DTO.CustomUserDetails;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import naver.tpdms0169.todo_server.login.Repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// UserDetails 로 받은 usename, password 를 DB에 가서 값을 가져와 Authentication Manage 에 검증을 위해 보내는 역할
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        //DB에서 조회
        UserEntity userData = userRepository.findByUsername(username);

        if (userData != null) {

            //UserDetails에 담아서 return하면 AutneticationManager가 검증 함
            return new CustomUserDetails(userData);
        }

        return null;
    }
}