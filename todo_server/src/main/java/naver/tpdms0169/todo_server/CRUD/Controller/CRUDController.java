package naver.tpdms0169.todo_server.CRUD.Controller;

import naver.tpdms0169.todo_server.CRUD.DTO.CreateUpdateDTO;
import naver.tpdms0169.todo_server.CRUD.DTO.DeleteDTO;
import naver.tpdms0169.todo_server.CRUD.DTO.GetTodo;
import naver.tpdms0169.todo_server.CRUD.Service.CRUDService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ResponseBody
@RequestMapping("/todo")
public class CRUDController {

    CRUDService crudService;
    public CRUDController (CRUDService crudService) {
        this.crudService = crudService;
    }

    // create
    @PostMapping("/create")
    public Boolean createTodo (
            @RequestBody CreateUpdateDTO createDTO) {

        return crudService.createTodo(createDTO);
    }

    // read
    @GetMapping("/read")
    public List<GetTodo> readTodo (
            @RequestParam String username
    ) {
        return crudService.readTodo(username);
    }

    //update
    @PostMapping("/update")
    public Boolean updateTodo (
            @RequestBody GetTodo getTodo
    ){
        return crudService.updateTodo(getTodo);
    }

    // delete
    @DeleteMapping("/delete")
    public String deleteTodo (
            @RequestBody DeleteDTO deleteDTO
    ){

        return crudService.deleteTodo(deleteDTO);
    }
}
