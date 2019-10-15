package com.alkfejl.TodoProject.repository;

import com.alkfejl.TodoProject.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    List<User> findAllByFamilyId(Integer id);
    List<User> findAll();
}
