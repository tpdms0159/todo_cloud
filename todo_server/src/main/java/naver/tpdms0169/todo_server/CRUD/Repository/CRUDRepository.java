package naver.tpdms0169.todo_server.CRUD.Repository;


import naver.tpdms0169.todo_server.CRUD.Entity.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

public interface CRUDRepository extends JpaRepository<TodoEntity, String> {

    // todo 업데이트
    @Transactional
    @Modifying
    @Query("update TodoEntity set title=:title, text=:text, state=:state, deadline=:deadline where username=:username and id=:id")
    int updateTodo(@Param("id") Long id,
                   @Param("username") String username,
                   @Param("title") String title,
                   @Param("text") String text,
                   @Param("state") String state,
                   @Param("deadline") Date deadline
                          );
    Boolean existsByIdAndUsername(Long id, String username);

    // delete
    Boolean existsById(Long id);
    TodoEntity findById(Long id);
    
    @Transactional
    @Modifying
    @Query("update TodoEntity set show_yn='N' where id=:id")
    int deleteTodo(Long id);
    // read
    @Query("select t from TodoEntity t where t.username=:username and t.deadline>=:deadline")
    List<TodoEntity> getTodo(String username, Date deadline);

}
