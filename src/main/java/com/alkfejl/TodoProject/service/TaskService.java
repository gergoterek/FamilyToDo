package com.alkfejl.TodoProject.service;

import com.alkfejl.TodoProject.model.Element;
import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.repository.ElementRepository;
import com.alkfejl.TodoProject.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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

    public ResponseEntity<Task> addTask(Task task) {                                        //Feladattábla hozzáadása
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

    public ResponseEntity<Element> addElement(Element element) {                           //Elem hozzáadása a feladattáblához
        //TODO: Nem írja bele az adatbázisba a hozzá tartozó TASK_ID-t!
        return ResponseEntity.ok(elementRepository.save(element));
    }
}