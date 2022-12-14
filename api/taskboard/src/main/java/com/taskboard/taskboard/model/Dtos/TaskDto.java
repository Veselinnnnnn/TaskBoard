package com.taskboard.taskboard.model.Dtos;

import com.taskboard.taskboard.model.enums.TaskType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TaskDto {
    private Long id;
    private String name;
    private String description;
    private Long parentTaskId;
    private TaskType type;
    private Long projectId;
    private Long userId;
}
