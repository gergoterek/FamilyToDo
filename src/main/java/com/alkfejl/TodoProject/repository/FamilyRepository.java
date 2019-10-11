package com.alkfejl.TodoProject.repository;

import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FamilyRepository extends CrudRepository<Family, Integer> {
    //Optional<User> findByUsername(String username);
}
