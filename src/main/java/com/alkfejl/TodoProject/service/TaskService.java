package com.alkfejl.TodoProject.service;

import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.repository.ElementRepository;
import com.alkfejl.TodoProject.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    TaskRepository taskRepository;

    @Autowired
    ElementRepository elementRepository;

    @Autowired
    FamilyService familyService;

    @Autowired
    UserService userService;

    @PostMapping("/add")
    public ResponseEntity<Task> addTask(Task task) {
        Optional<Task> oTask = taskRepository.findByTaskName(task.getTaskName());
        if (oTask.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        User actUser = userService.getActUser();
        task.setFamily(familyService.getMyFamily(actUser));

        taskRepository.save(task);

        for(int i=0;i<task.getElements().size();i++){
            task.getElements().get(i).setTask(task);
        }
        elementRepository.saveAll(task.getElements());
        return ResponseEntity.ok(task);
    }
}