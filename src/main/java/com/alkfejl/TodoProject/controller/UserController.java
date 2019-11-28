package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.Invitation;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.service.FamilyService;
import com.alkfejl.TodoProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*",  allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private FamilyService familyService;

/*
    @GetMapping("/family")
    public List<User> getMyFamilyMembers(){
        User actUser = userService.getActUser();
        Family myFamily = familyService.getMyFamily(actUser);
        return myFamily.getUsers();
    }
*/
    @GetMapping("/family")
    public Family getMyFamily(){
        User actUser = userService.getActUser();
        return familyService.getMyFamily(actUser);
    }

    @PostMapping("/registration")
    public ResponseEntity<User> register(@RequestBody User user, Invitation inv) {
        return userService.register(user);
    }

    @GetMapping("/login")
    public ResponseEntity<User> login() {
        return ResponseEntity.ok(userService.getActUser());
    }

}
