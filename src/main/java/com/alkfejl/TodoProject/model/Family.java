package com.alkfejl.TodoProject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Family {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "family")
    private List<User> users;

    @JsonIgnore
    @OneToMany(mappedBy = "family")
    private List<Task> tasks;

    @JsonIgnore
    @OneToMany(mappedBy = "family")
    private List<Invitation> invitations;

}