package com.alkfejl.TodoProject.service;

import com.alkfejl.TodoProject.model.Invitation;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.repository.InvitationRepository;
import com.alkfejl.TodoProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    InvitationRepository invitationRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public ResponseEntity<User> register(User user) {
        Optional<User> oUser = userRepository.findByUsername(user.getUsername());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(User.Role.ROLE_ADMIN);
        return ResponseEntity.ok(userRepository.save(user));
    }

    public User getActUser() throws UsernameNotFoundException {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userName = ((UserDetails)principal).getUsername();
        Optional<User> oUser = userRepository.findByUsername(userName);
        if (!oUser.isPresent()) {
            throw new UsernameNotFoundException(userName);
        }
        User actUser = oUser.get();
        return actUser;
    }

}
