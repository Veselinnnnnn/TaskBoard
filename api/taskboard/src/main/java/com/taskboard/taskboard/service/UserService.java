package com.taskboard.taskboard.service;

import com.taskboard.taskboard.model.Dtos.TaskDto;
import com.taskboard.taskboard.model.Dtos.UserDto;
import com.taskboard.taskboard.model.entities.Project;
import com.taskboard.taskboard.model.entities.Task;
import com.taskboard.taskboard.model.entities.User;
import com.taskboard.taskboard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

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

    public User findUserById(Long id){
        return  userRepository.findUserById(id);
    }

    public User fetchUserByEmailAndPassword(String email,String password){
        return userRepository.findByEmailAndPassword(email,password);
    }

    @Transactional
    public User updateUser(UserDto userDto) {
        User updatedUser = new User();
        Optional<User> user = this.userRepository.findUserByEmail(userDto.getEmail());
        if(user.isEmpty()){
            throw new IllegalArgumentException("User with such email does not exists");
        }else{
            updatedUser.setId(userDto.getId());
            updatedUser.setEmail(userDto.getEmail());
            updatedUser.setFirstName(userDto.getFirstName());
            updatedUser.setPassword(userDto.getPassword());
            updatedUser.setLastName(userDto.getLastName());
        }
        return this.userRepository.save(updatedUser);
    }
}
