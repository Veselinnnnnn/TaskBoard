package com.taskboard.taskboard.model.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.taskboard.taskboard.model.enums.TaskType;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    // TODO smeni auto shto bugva
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private Long id;
    private String name;
    private String description;
    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    private Task parentTask;
    private TaskType type;
    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    private Project project;
    private Long userId;
    private String taskOwner;

}
