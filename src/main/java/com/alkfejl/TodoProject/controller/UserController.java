package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.service.FamilyService;
import com.alkfejl.TodoProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private FamilyService familyService;

    @GetMapping("")
    public List<User> getMyFamilyMembers(){
        User actUser = userService.getActUser();
        Family myFamily = familyService.getMyFamily(actUser);
        return myFamily.getUsers();
    }

    @PostMapping("/registration")
    public ResponseEntity<User> register(@RequestBody User user) {
        return userService.register(user);
    }
}
