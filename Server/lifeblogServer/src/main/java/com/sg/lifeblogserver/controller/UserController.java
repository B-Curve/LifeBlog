/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.controller;

import com.sg.lifeblogserver.dao.UserDao;
import com.sg.lifeblogserver.model.User;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import javax.ws.rs.QueryParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author asmat
 */
@RestController
@CrossOrigin
@RequestMapping
public class UserController {

    @Autowired
    UserDao userDao;
    
    public static Map<String, User> jwt = new HashMap<>();
    public static String getRandomString(){
        String all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder builder = new StringBuilder();
        Random r = new Random();
        while(builder.length() < 128){
            int index = (int) (r.nextFloat() * all.length());
            builder.append(all.charAt(index));
        }
        return builder.toString();
    }
    
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity authenticateUser(@QueryParam("u") String username, @QueryParam("p") String password) {
        User validUser = userDao.getByUsername(username); 
        if (validUser == null) return ResponseEntity.badRequest().body("Username or password incorrect.");
        if(!validUser.getPassword().equals(password)) return ResponseEntity.badRequest().body("Password is Incorrect.");
        String key = getRandomString();
        jwt.put(key, validUser);
        return ResponseEntity.ok(key);
    }
    
    @RequestMapping(value = "/user/{username}", method = RequestMethod.GET)
    public ResponseEntity fetchUser(@PathVariable("username") String username) {
        User user = userDao.getByUsername(username);
        if (user == null) {
            return ResponseEntity.badRequest()
                    .body("User not found.");
        }
        return ResponseEntity.ok(user);
    }
    
    @RequestMapping(value = "/token/{token}", method = RequestMethod.GET)
    public ResponseEntity  fetchUserByLoginToken(@PathVariable("token") String token){
        if(!jwt.containsKey(token)) return ResponseEntity.badRequest().body("ERROR");
        return ResponseEntity.ok(jwt.get(token));
    }

}
