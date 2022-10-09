package com.taskboard.taskboard.controller;

import com.taskboard.taskboard.model.Dtos.MembersToProjectDto;
import com.taskboard.taskboard.model.Dtos.ProjectDto;
import com.taskboard.taskboard.model.Dtos.TaskDto;
import com.taskboard.taskboard.model.entities.Project;
import com.taskboard.taskboard.model.entities.Task;
import com.taskboard.taskboard.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/my-projects")
public class ProjectController {

    private ProjectService projectService;

    public ProjectController(ProjectService projectService){
        this.projectService= projectService;
    }

    //  Connects with database and runs quarry to create a project
    @RequestMapping(method = RequestMethod.POST, path = "")
    public ResponseEntity<Project> createProject(@RequestBody ProjectDto projectDto) {
        return new ResponseEntity<>(this.projectService.createProject(projectDto), HttpStatus.OK);
    }

    //  Connects with database and runs quarry to get all project
    @RequestMapping(method = RequestMethod.GET, path = "")
    public ResponseEntity<List<Project>> getAllProjects () {
        List<Project> projects = projectService.findAllProjects();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }


    //  Connects with database and runs quarry to add member/s to project
    @RequestMapping(method = RequestMethod.POST, path = "/members")
    public ResponseEntity<Project> addMembersToProject (@RequestBody MembersToProjectDto dto) {
        Project projects = projectService.addMembers(dto);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }
}
