package com.taskboard.taskboard.repository;

import com.taskboard.taskboard.model.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
    void deleteTaskById(Long id);
}
