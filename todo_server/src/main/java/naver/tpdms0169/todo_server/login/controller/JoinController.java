package naver.tpdms0169.todo_server.login.controller;

import naver.tpdms0169.todo_server.login.DTO.JoinDTO;
import naver.tpdms0169.todo_server.login.service.JoinService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class JoinController {
    private final JoinService joinService;

    public JoinController(JoinService joinService) {
        this.joinService = joinService;
    }

    @PostMapping("/join")
    public String joinProcess(@RequestBody JoinDTO joinDTO) {
        joinService.JoinProcess(joinDTO);
        return "ok";
    }
}
