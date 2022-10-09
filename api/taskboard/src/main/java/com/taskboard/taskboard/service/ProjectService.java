package com.taskboard.taskboard.service;

import com.taskboard.taskboard.model.Dtos.MembersToProjectDto;
import com.taskboard.taskboard.model.Dtos.ProjectDto;
import com.taskboard.taskboard.model.entities.Project;
import com.taskboard.taskboard.model.entities.Task;
import com.taskboard.taskboard.model.entities.User;
import com.taskboard.taskboard.repository.ProjectRepository;
import com.taskboard.taskboard.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public ProjectService(ProjectRepository projectRepository, UserRepository userRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
    }

    //TODO create/delete/getOne/getAllProjectsByUserId
    //TODO: create constructor in model with TaskDto params

    //Create project method
    @Transactional
    public Project createProject(ProjectDto projectDto) {
        Project project = new Project();

        boolean userIdExists=this.userRepository.existsById(projectDto.getUserId());
        if(!userIdExists){
            throw new IllegalArgumentException("User with such id does not exists");
        }

        project.setProjectName(projectDto.getProjectName());
        project.setUserId(projectDto.getUserId());

        Optional<User> user = this.userRepository.findById(projectDto.getUserId());
        if (user.isPresent()) {
            project.setTeamLeader(user.get().getFirstName().concat(" ").concat(user.get().getLastName()));
            return this.projectRepository.save(project);
        } else {
            throw new IllegalArgumentException("User with such id does not exists");
        }
    }

    //  Delete project by id
    public void deleteProjectByID(Long id) {
        projectRepository.deleteProjectById(id);
    }

    //  Find all projects
    //  TODO: change it to be by id
    public List<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    //  Add members to project
    @Transactional
    public Project addMembers(MembersToProjectDto dto) {
        Optional<Project> project = this.projectRepository.findById(dto.getProjectId());
        if (project.isEmpty()) {
            throw new IllegalArgumentException("Project with such id does not exist");
        }
        if (dto.getMembersEmails().isEmpty()) {
            throw new IllegalArgumentException("No members to add");
        }
        dto.getMembersEmails().forEach(e -> {
            Optional<User> user = this.userRepository.findUserByEmail(e);
            if (user.isPresent()) {
                boolean contains = project.get().getMembers().contains(user.get());
                if (!contains) {
                    project.get().addMember(user.get());
                }
            }
        });

        return projectRepository.save(project.get());
    }
}
