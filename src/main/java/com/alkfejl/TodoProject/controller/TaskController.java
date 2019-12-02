package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.*;
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

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTask(@PathVariable Integer id){
        User actUser = userService.getActUser();
        Family myFamily = familyService.getMyFamily(actUser);
        List<Task> taskList = myFamily.getTasks();
        for(Task task : taskList) {
            if (task.getId() == id) {
                return ResponseEntity.ok(task);
            }
        }
        return ResponseEntity.ok().build();
    }

    @PostMapping("/add")
    public ResponseEntity<Task> addTask(@RequestBody Task task) {                                               //Feladattábla hozzáadása
        return taskService.addTask(task);
    }

    @PostMapping("/{id}/elements")
    public ResponseEntity<Element> addElement(@RequestBody Element element, @PathVariable Integer id) {                                   //Elem hozzáadása a táblához
        return taskService.addElement(element,id);
    }


}