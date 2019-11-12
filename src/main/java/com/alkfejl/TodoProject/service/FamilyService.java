package com.alkfejl.TodoProject.service;

import com.alkfejl.TodoProject.model.Family;
import com.alkfejl.TodoProject.model.User;
import com.alkfejl.TodoProject.repository.FamilyRepository;
import com.alkfejl.TodoProject.repository.InvitationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FamilyService {
    @Autowired
    FamilyRepository familyRepository;

    @Autowired
    InvitationRepository invitationRepository;

    public Family getMyFamily(User user) throws UsernameNotFoundException {                     //Visszaadja melyik családhoz tartozik a user
        Optional<Family> oFamily = familyRepository.findById(user.getFamily().getId());
        if (!oFamily.isPresent()){
            throw new UsernameNotFoundException(user.getUsername());
        }
        Family actFamily = oFamily.get();
        return actFamily;
    }
}
