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
public class ProjectDto {
    private String projectName;
    private Long userId;
}
