package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.Element;
import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.service.FamilyService;
import com.alkfejl.TodoProject.service.TaskService;
import com.alkfejl.TodoProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    TaskService taskService;

    @Autowired
    UserService userService;

    @Autowired
    FamilyService familyService;

    @GetMapping("")
    public List<Task> tasks(){
        User actUser = userService.getActUser();
        Family myFamily = familyService.getMyFamily(actUser);
        return myFamily.getTasks();
    }

    @PostMapping("/add")
    public ResponseEntity<Task> addTask(@RequestBody Task task) {                                               //Feladattábla hozzáadása
        return taskService.addTask(task);
    }

    @PostMapping("/addelement")
    public ResponseEntity<Element> addElement(@RequestBody Element element) {                                   //Elem hozzáadása a táblához
        return taskService.addElement(element);
    }
}
