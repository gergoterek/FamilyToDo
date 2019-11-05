package com.alkfejl.TodoProject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Element {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String elementName;

    /*@Column(nullable = false)
    private String elementStatus;*/

    @Column
    @NotNull
    @Enumerated(EnumType.STRING)
    private ElementStatus elementStatus;

    public enum ElementStatus {
        UNDONE, DONE
    }

    @JsonIgnore
    @ManyToOne
    private Task task;
}
