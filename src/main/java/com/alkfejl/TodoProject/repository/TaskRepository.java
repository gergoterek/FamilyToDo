package com.alkfejl.TodoProject.repository;

import com.alkfejl.TodoProject.model.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends CrudRepository<Task, Integer> {
    List<Task> findAllByFamilyId(Integer id);
    Optional<Task> findByTaskName(String taskName);
}
