package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.repository.FamilyRepository;
import com.alkfejl.TodoProject.repository.TaskRepository;
import com.alkfejl.TodoProject.repository.UserRepository;
import com.alkfejl.TodoProject.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/home")
public class HomeController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    FamilyRepository familyRepository;

    @Autowired
    TaskRepository taskRepository;

    AuthenticatedUser actUser;

    @GetMapping("")
    public List<User> home(){
        return userRepository.findAll();
    }

    @GetMapping("/family")
    public List<Family> family(){
        return familyRepository.findAll();
    }

    @GetMapping("/family/{id}")
    public List<User> getUsersByFamily(@PathVariable Integer id){
        return userRepository.findAllByFamilyId(id);
    }

    @GetMapping("/tasks")
    public List<Task> getAllTask(){
        familyRepository.findById(actUser.getUser().getFamily().getId());
    }
}
