package com.taskboard.taskboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.taskboard.taskboard.model.entities.User;
import com.taskboard.taskboard.service.UserService;

@RestController
@RequestMapping(path = "")
public class UserController {

    @Autowired
    private UserService userService;

    //  Connects with database to create a new record in user table which is new user
    @RequestMapping(method = RequestMethod.POST,path = "/signUp")
    public User signUpUser(@RequestBody User user)throws Exception {
        String tempEmail= user.getEmail();
        if(tempEmail !=null && !"".equals(tempEmail)){
            User userObj = userService.fetchUserByEmailId(tempEmail);
            if(userObj != null){
                throw new Exception("User with this email already exists");
            }
        }
        User userObj = null;
        userObj = userService.saveUser(user);
        return userObj;
    }

    //  Connect with database to compare with user table records to see if exist a user with such email and password
    @RequestMapping(method = RequestMethod.POST,path = "/signIn")
    public User signInUser(@RequestBody User user)throws Exception{
        String tempEmail = user.getEmail();
        String tempPass = user.getPassword();
        User userObj  = null;
        if(tempEmail  !=null && tempPass != null){
            userObj = userService.fetchUserByEmailAndPassword(tempEmail,tempPass);
        }
        if(userObj == null){
            throw new Exception("The user does not exist!");
        }
        return userObj;
    }

}
