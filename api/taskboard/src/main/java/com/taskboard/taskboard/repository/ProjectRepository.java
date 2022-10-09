package com.taskboard.taskboard.repository;

import com.taskboard.taskboard.model.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.OptionalInt;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    void deleteProjectById(Long id);
    Optional<Project> findById(Long id);
}
