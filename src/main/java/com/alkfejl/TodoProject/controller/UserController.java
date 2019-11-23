package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.Family;
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

    @GetMapping("")
    public List<User> getMyFamilyMembers(){                                                             //Összes családtag megadása
        User actUser = userService.getActUser();
        Family myFamily = familyService.getMyFamily(actUser);
        return myFamily.getUsers();
    }

    @PostMapping("/registration")
    public ResponseEntity<User> register(@RequestBody User user) {                                      //Regisztráció
        return userService.register(user);
    }

    @GetMapping("/login")
    public ResponseEntity<User> login() {
        return ResponseEntity.ok(userService.getActUser());
    }

}
