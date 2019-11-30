package com.alkfejl.TodoProject.service;

import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.Invitation;
import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.repository.FamilyRepository;
import com.alkfejl.TodoProject.repository.InvitationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FamilyService {
    @Autowired
    FamilyRepository familyRepository;

    @Autowired
    FamilyService familyService;

    @Autowired
    InvitationRepository invitationRepository;

    @Autowired
    UserService userService;

    public Family getMyFamily(User user) throws UsernameNotFoundException {
        Optional<Family> oFamily = familyRepository.findById(user.getFamily().getId());
        if (!oFamily.isPresent()){
            throw new UsernameNotFoundException(user.getUsername());
        }
        Family actFamily = oFamily.get();
        return actFamily;
    }

    public Invitation genInvitationCode() throws UsernameNotFoundException {
        User actUser = userService.getActUser();
        Invitation inv = new Invitation();
        inv.setFamily(familyService.getMyFamily(actUser));
        return inv;
    }
}
