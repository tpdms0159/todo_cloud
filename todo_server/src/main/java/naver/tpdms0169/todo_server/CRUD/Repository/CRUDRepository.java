package naver.tpdms0169.todo_server.CRUD.Repository;

import naver.tpdms0169.todo_server.CRUD.DTO.GetTodo;
import naver.tpdms0169.todo_server.CRUD.Entity.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CRUDRepository extends JpaRepository<TodoEntity, String> {

    // update
    Boolean existsByIdAndUsername(Long id, String username);
    // delete
    Boolean existsById(Long id);
    TodoEntity findById(Long id);
    // read
    List<TodoEntity> findByUsername(String username);

}
