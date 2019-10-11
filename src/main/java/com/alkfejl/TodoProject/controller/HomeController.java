package com.alkfejl.TodoProject.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {

    @GetMapping("")
    public String home(){
        return "Hello world!";
    }

    @GetMapping("szia")
    public String szia(){
        return "Szia világ!";
    }
}
