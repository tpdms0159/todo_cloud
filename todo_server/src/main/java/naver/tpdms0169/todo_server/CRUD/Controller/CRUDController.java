package naver.tpdms0169.todo_server.CRUD.Controller;

import naver.tpdms0169.todo_server.CRUD.DTO.CreateDTO;
import naver.tpdms0169.todo_server.CRUD.Service.CRUDService;
import org.springframework.web.bind.annotation.*;

@RestController
@ResponseBody
@RequestMapping("/todo")
public class CRUDController {

    CRUDService crudService;

    public CRUDController (CRUDService crudService) {
        this.crudService = crudService;
    }
    @PostMapping("/create")
    public String createTodo (
            @RequestBody CreateDTO createDTO) {

        return crudService.createTodo(createDTO);



    }

}
