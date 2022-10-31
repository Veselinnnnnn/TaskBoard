package com.taskboard.taskboard.controller;

import com.taskboard.taskboard.model.Dtos.TaskDto;
import com.taskboard.taskboard.model.entities.Project;
import com.taskboard.taskboard.model.entities.Task;
import com.taskboard.taskboard.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return new ResponseEntity<>(this.taskService.createTask(taskDto), HttpStatus.CREATED);
    }

    //  Connects with database and runs quarry to get all tasks
    @RequestMapping(method = RequestMethod.GET, path = "")
    public ResponseEntity<List<Task>> getAllTasks (@RequestParam Long userId, @RequestParam Long projectId) {
        List<Task> tasks = taskService.findAllTasksToCurrentProjectAndUser(userId, projectId);
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PATCH, path = "")
    public ResponseEntity<Task> updateTaskType(@RequestBody TaskDto taskDto) {
        return new ResponseEntity<>(this.taskService.updateTask(taskDto), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<Task> getOneTask(@PathVariable("id")Long id) {
        return new ResponseEntity<>(this.taskService.findTaskById(id), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity<Task> deleteTask(@PathVariable("id") Long id){
        this.taskService.deleteTaskById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
