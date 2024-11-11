package naver.tpdms0169.todo_server.login.controller;

import naver.tpdms0169.todo_server.login.DTO.JoinDTO;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import naver.tpdms0169.todo_server.login.service.JoinService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@ResponseBody
@CrossOrigin({"localhost:3000"})
public class MainController {

    @GetMapping("/")
    public String mainP() {

        return "main Controller";
    }


}