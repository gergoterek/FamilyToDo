package com.alkfejl.TodoProject.service;

import com.alkfejl.TodoProject.model.Element;
import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.repository.ElementRepository;
import com.alkfejl.TodoProject.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

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

        return ResponseEntity.ok(task);
    }

    public ResponseEntity<Element> addElement( Element element, Integer id) {
        Optional<Task> oTask = taskRepository.findById(id);
        if (oTask.isPresent()) {
            Task task = oTask.get();
            task.getElements().add(element);
            element.setTask(task);
            Element createdElement = elementRepository.save(element);
            return ResponseEntity.ok(createdElement);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<Element> modifyElement( Element element, Integer id) {
        Optional<Element> oElement = elementRepository.findById(id);
        if (oElement.isPresent()) {
            Element createdElement = oElement.get();
            createdElement.setElementStatus(element.getElementStatus());
            elementRepository.save(createdElement);
            return ResponseEntity.ok(createdElement);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}