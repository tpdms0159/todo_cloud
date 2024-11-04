package naver.tpdms0169.todo_server.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping(value = "/login")
    @ResponseBody
    public Boolean checkLogin (
            @RequestBody UserEntity user
    ) {
        boolean result = userService.getPassword(user.getUsername(), user.getPassword());
        return result;
    }
}
