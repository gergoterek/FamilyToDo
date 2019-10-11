package com.alkfejl.TodoProject.repository;

import com.alkfejl.TodoProject.model.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TaskRepository extends CrudRepository<Task, Integer> {
    //Optional<User> findByUsername(String username);
}
