package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    TaskService taskService;

    @PostMapping("/add")
    public ResponseEntity<Task> addTask(@RequestBody Task task) {
        return taskService.addTask(task);
    }
}
