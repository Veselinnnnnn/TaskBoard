package com.taskboard.taskboard.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String projectName;
    @OneToMany(mappedBy = "project")
    private Set<Task> tasks;
    @ManyToMany(cascade = { CascadeType.PERSIST,
    CascadeType.MERGE})
    @JoinTable(
            name = "User_Project",
            joinColumns = { @JoinColumn(name = "project_id") },
            inverseJoinColumns = { @JoinColumn(name = "user_id") }
    )
    private Set<User> members;
    private Long userId;
    private String teamLeader;

    public Project(String teamLeader,String projectName, Long userId) {
        this.teamLeader = teamLeader;
        this.projectName = projectName;
        this.userId = userId;
        this.tasks = new HashSet<>();
        this.members = new HashSet<>();
    }

    public void addMember(User member) {
        this.members.add(member);
    }
}
