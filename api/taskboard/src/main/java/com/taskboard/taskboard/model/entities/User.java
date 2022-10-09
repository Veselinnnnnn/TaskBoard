package com.taskboard.taskboard.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.taskboard.taskboard.model.entities.Project;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;
    @JsonIgnore
    @ManyToMany(mappedBy = "members", cascade = { CascadeType.ALL })
    private Set<Project> projects;

}
