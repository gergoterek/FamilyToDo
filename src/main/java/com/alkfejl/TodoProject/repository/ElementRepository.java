package com.alkfejl.TodoProject.repository;

import com.alkfejl.TodoProject.model.Element;
import com.alkfejl.TodoProject.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ElementRepository extends CrudRepository<Element, Integer> {
    //Optional<User> findByUsername(String username);
}
