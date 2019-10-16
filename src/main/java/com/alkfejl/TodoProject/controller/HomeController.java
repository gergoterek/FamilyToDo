package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.service.FamilyService;
import com.alkfejl.TodoProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class HomeController {

    @Autowired
    UserService userService;

    @Autowired
    FamilyService familyService;

    @GetMapping("")
    public String currentUserName() {
        return "Welcome "+userService.getActUser().getUsername();
    }

    @GetMapping("/family")
    public List<User> family(){
        User actUser = userService.getActUser();
        Family myFamily = familyService.getMyFamily(actUser);
        return myFamily.getUsers();
    }

    @GetMapping("/task")
    public List<Task> tasks(){
        User actUser = userService.getActUser();
        Family myFamily = familyService.getMyFamily(actUser);
        return myFamily.getTasks();
    }
}
