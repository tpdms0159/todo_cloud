package naver.tpdms0169.todo_server.login.controller;

import naver.tpdms0169.todo_server.login.DTO.JoinDTO;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import naver.tpdms0169.todo_server.login.service.JoinService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@ResponseBody
@CrossOrigin({"localhost:3000"})
public class JoinController {
    private final JoinService joinService;

    public JoinController(JoinService joinService ) {
        this.joinService = joinService;

    }

    @PostMapping("/join")
    public String joinProcess(@RequestBody JoinDTO joinDTO) {

        return joinService.JoinProcess(joinDTO);

        }
    }

