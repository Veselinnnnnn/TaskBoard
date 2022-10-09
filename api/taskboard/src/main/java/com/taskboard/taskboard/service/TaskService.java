package com.taskboard.taskboard.service;

import com.taskboard.taskboard.model.Dtos.TaskDto;
import com.taskboard.taskboard.model.entities.Project;
import com.taskboard.taskboard.model.entities.Task;
import com.taskboard.taskboard.model.entities.User;
import com.taskboard.taskboard.repository.ProjectRepository;
import com.taskboard.taskboard.repository.TaskRepository;
import com.taskboard.taskboard.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    //TODO create(update(save))/delete//getOne/getAll


    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public TaskService(UserRepository userRepository,TaskRepository taskRepository, ProjectRepository projectRepository) {
        this.taskRepository = taskRepository;
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    //TODO: create constructor in model with TaskDto params

    //  Connects with database to create a new record in task table /new task/
    @Transactional
    public Task createTask(TaskDto taskDto) {
        Task task = new Task();
        Optional<Project> project = this.projectRepository.findById(taskDto.getProjectId());
        if (project.isEmpty()) {
            throw new IllegalArgumentException("Project with such id does not exist.");
        }
        Optional<Task> parentTask;
        if (taskDto.getParentTaskId() == null) {
            task.setParentTask(null);
        } else {
            Long parentTaskId = taskDto.getParentTaskId();
            parentTask = this.taskRepository.findById(parentTaskId);
            if (parentTask.isEmpty()) {
                throw new IllegalArgumentException("asd");
            }
            System.out.println(parentTask.get().getName());
            task.setParentTask(parentTask.get());
            System.out.println(task.getName());
        }
        task.setName(taskDto.getName());
        task.setDescription(taskDto.getDescription());
        task.setType(taskDto.getType());
        task.setUserId(taskDto.getUserId());
        task.setProject(project.get());

        Optional<User> user = this.userRepository.findById(taskDto.getUserId());
        if (user.isEmpty()) {
            return this.taskRepository.save(task);
        }
        task.setTaskOwner(user.get().getFirstName().concat(" ").concat(user.get().getLastName()));
        return this.taskRepository.save(task);
    }


    //  Find task by id method
    public Task findTaskById(Long id) {
        return new Task();
    }

    //  Delete task by id
    public void deleteTaskId(Long id) {
        taskRepository.deleteTaskById(id);
    }

    //  Find all tasks method
    public List<Task> findAllTasks() {
        return taskRepository.findAll();
    }
}
