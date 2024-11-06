package naver.tpdms0169.todo_server.CRUD.Repository;

import naver.tpdms0169.todo_server.CRUD.Entity.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CRUDRepository extends JpaRepository<TodoEntity, String> {

    // update
    // delete
    // read

}
