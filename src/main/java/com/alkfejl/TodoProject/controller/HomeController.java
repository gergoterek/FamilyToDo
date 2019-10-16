package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {

    @Autowired
    UserService userService;

    @GetMapping("")
    public String currentUserName() {
        return "Welcome "+userService.getActUser().getUsername();
    }
}
