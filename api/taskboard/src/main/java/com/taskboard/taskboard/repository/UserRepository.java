package com.taskboard.taskboard.repository;

import com.taskboard.taskboard.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    public User findByEmail(String emailId);
    public User findByEmailAndPassword(String email, String password);
    Optional<User> findUserByEmail(String emailId);
    boolean existsByEmail(String email);
}
