package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.repository.FamilyRepository;
import com.alkfejl.TodoProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class HomeController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    FamilyRepository familyRepository;

    @GetMapping("")
    public List<User> home(){
        return userRepository.findAll();
    }

    @GetMapping("szia")
    public String szia(){
        return "Szia világ!";
    }
}
