package com.taskboard.taskboard.service;

import com.taskboard.taskboard.model.entities.User;
import com.taskboard.taskboard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user){
        return userRepository.save(user);
    }

    public User fetchUserByEmailId(String email){
       return   userRepository.findByEmail(email);
    }

    public User fetchUserByEmailAndPassword(String email,String password){
        return userRepository.findByEmailAndPassword(email,password);
    }
}
