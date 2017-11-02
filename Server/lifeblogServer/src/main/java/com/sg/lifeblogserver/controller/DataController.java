/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.controller;

import com.sg.lifeblogserver.model.Post;
import com.sg.lifeblogserver.model.User;
import com.sg.lifeblogserver.dao.CategoryDao;
import com.sg.lifeblogserver.dao.UserDao;
import com.sg.lifeblogserver.dao.PostDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author brandonkervin
 */
@RestController
@CrossOrigin
@RequestMapping("/api")
public class DataController {
    
    @Autowired
    CategoryDao categories;
    @Autowired
    UserDao users;
    @Autowired
    PostDao posts;
    
    @RequestMapping(value="/categories", method=RequestMethod.GET)
    public ResponseEntity fetchCategories(){
        return ResponseEntity.ok(categories.getAll());
    }
    
    @RequestMapping(value="/posts/{sort}", method=RequestMethod.GET)
    public ResponseEntity fetchPosts(@PathVariable("sort") String sorting){
        switch(sorting){
            case "homedecor":
                return ResponseEntity
                        .ok(posts.getByCategory(1));
            case "fashion":
                return ResponseEntity
                        .ok(posts.getByCategory(2));
            case "automotive":
                return ResponseEntity
                        .ok(posts.getByCategory(3));
            case "health":
                return ResponseEntity
                        .ok(posts.getByCategory(4));
            default:
                //DEFAULT = NO SORTING. SEND ALL POSTS
                return ResponseEntity
                        .ok(posts.getAll());
        }
    }
    
    @RequestMapping(value="/u/{username}", method=RequestMethod.GET)
    public ResponseEntity fetchUser(@PathVariable("username") String username){
        User u = users.getByUsername(username);
        if(u == null) return ResponseEntity.badRequest()
                .body("User not found.");
        return ResponseEntity.ok(u);
    }
    
    @RequestMapping(value="post/{postId}", method=RequestMethod.GET)
    public ResponseEntity fetchPost(@PathVariable("postId") int id){
        Post p = posts.getById(id);
        if(p == null) return ResponseEntity.badRequest()
                .body("Post #" + id + " not found.");
        return ResponseEntity.ok(p);
    }
    
}
