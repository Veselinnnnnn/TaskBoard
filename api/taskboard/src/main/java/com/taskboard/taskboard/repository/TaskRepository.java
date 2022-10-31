package com.taskboard.taskboard.repository;

import com.taskboard.taskboard.model.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
//    void deleteTaskById(Long id);

    List<Task> findAllById(Long id);

    Task findTaskById(Long id);

    List<Task> findAllByUserIdAndProjectId(Long userId, Long projectId);
}
