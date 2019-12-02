package com.alkfejl.TodoProject.service;

import com.alkfejl.TodoProject.model.*;
import com.alkfejl.TodoProject.repository.FamilyRepository;
import com.alkfejl.TodoProject.repository.InvitationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalTime;
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

    public ResponseEntity<Invitation> addInvitation(Invitation inv, Family fam) {
        fam.getInvitations().add(inv);
        inv.setFamily(fam);
        inv.setCreatedAt(LocalDateTime.now());
        Invitation createdInvitation = invitationRepository.save(inv);
        return ResponseEntity.ok(createdInvitation);
    }
}
