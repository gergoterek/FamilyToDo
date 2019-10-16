package com.alkfejl.TodoProject.repository;

import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FamilyRepository extends CrudRepository<Family, Integer> {
    List<Family> findAll();
    Optional<Task> findAllTaskBy(Integer id);
}
