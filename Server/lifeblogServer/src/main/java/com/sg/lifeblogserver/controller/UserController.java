/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.controller;

import com.sg.lifeblogserver.dao.UserDao;
import com.sg.lifeblogserver.model.User;
import javax.ws.rs.QueryParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ResponseEntity authenticateUser(@QueryParam("username") String username, @QueryParam("password") String password) {
        User validUser = userDao.getByUsername(username); 
        if (validUser == null)
        {
            return ResponseEntity.badRequest()
                    .body("Username or password incorrect.");
        }
        return ResponseEntity.ok(validUser);
    }

}
