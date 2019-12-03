package com.alkfejl.TodoProject.controller;

import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.Invitation;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.repository.UserRepository;
import com.alkfejl.TodoProject.service.FamilyService;
import com.alkfejl.TodoProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*",  allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private FamilyService familyService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


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


    @PostMapping("registration")
    public ResponseEntity<User> register(@RequestBody User user) {
        Optional<User> oUser = userRepository.findByUsername(user.getUsername());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(User.Role.ROLE_USER);
        return ResponseEntity.ok(userRepository.save(user));
    }

    @GetMapping("/login")
    public ResponseEntity<User> login() {
        return ResponseEntity.ok(userService.getActUser());
    }


    @PostMapping("/invitation")
    public ResponseEntity<Invitation> addInv(@RequestBody Invitation inv) {
        Family fam = familyService.getMyFamily(userService.getActUser());
        return familyService.setInvitation(inv, fam);
    }


}
