package com.taskboard.taskboard.controller;

import com.taskboard.taskboard.model.Dtos.TaskDto;
import com.taskboard.taskboard.model.entities.Task;
import com.taskboard.taskboard.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    //TODO create/delete/getOne/getAllTaskByUserAndProjectId/getAllSubTaskByTaskId

    //  Connects with database and runs quarry to create a task
    @RequestMapping(method = RequestMethod.POST, path = "")
    public ResponseEntity<Task> createTask(@RequestBody TaskDto taskDto) {
        return new ResponseEntity<>(this.taskService.createTask(taskDto), HttpStatus.OK);
    }
}
