package com.alkfejl.TodoProject.repository;

import com.alkfejl.TodoProject.model.Family;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FamilyRepository extends CrudRepository<Family, Integer> {
    List<Family> findAll();
}
