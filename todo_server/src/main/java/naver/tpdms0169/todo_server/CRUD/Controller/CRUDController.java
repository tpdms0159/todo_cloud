package naver.tpdms0169.todo_server.CRUD.Controller;

import naver.tpdms0169.todo_server.CRUD.DTO.CreateUpdateDTO;
import naver.tpdms0169.todo_server.CRUD.DTO.DeleteDTO;
import naver.tpdms0169.todo_server.CRUD.DTO.GetRequestDTO;
import naver.tpdms0169.todo_server.CRUD.DTO.GetTodo;
import naver.tpdms0169.todo_server.CRUD.Service.CRUDService;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@ResponseBody
@RequestMapping("/todo")
@CrossOrigin({"localhost:3000"})
public class CRUDController {


    CRUDService crudService;
    public CRUDController (CRUDService crudService) {
        this.crudService = crudService;
        System.out.println("crud controller");
    }

    // create
    @PostMapping("/create")
    public Boolean createTodo (
            CreateUpdateDTO createDTO){
        System.out.println(createDTO.getTitle());

        return crudService.createTodo(createDTO);
    }

    // read
    @GetMapping("/read")
    public List<GetTodo> readTodo (
            GetRequestDTO getRequestDTO

    ) throws ParseException {
        return crudService.readTodo(getRequestDTO.getUsername(), getRequestDTO.getDeadline());
    }

    //update
    @PostMapping("/update")
    public Boolean updateTodo (
            GetTodo getTodo
    ){
        System.out.println(getTodo.getId());
        return crudService.updateTodo(getTodo);
    }

    // delete
    @PostMapping("/delete")
    public String deleteTodo (
            DeleteDTO deleteDTO
    ){

        System.out.println(deleteDTO.getId());
        return crudService.deleteTodo(deleteDTO);
    }
}
