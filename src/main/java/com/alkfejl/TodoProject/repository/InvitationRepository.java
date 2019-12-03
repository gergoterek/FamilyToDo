package com.alkfejl.TodoProject.repository;

import com.alkfejl.TodoProject.model.Invitation;
import com.alkfejl.TodoProject.model.Task;
import com.alkfejl.TodoProject.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InvitationRepository extends CrudRepository<Invitation, Integer> {
    //Optional<Invitation> findAllByInvitationCode(Integer id);
    List<Invitation> findAll();
    Invitation findByInvitationCode(Integer invCode);

    //List<Invitation> findAll();

}
