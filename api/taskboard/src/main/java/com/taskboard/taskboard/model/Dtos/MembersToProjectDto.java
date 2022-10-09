package com.taskboard.taskboard.model.Dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MembersToProjectDto {
    private Long projectId;
    private List<String> membersEmails;
}
