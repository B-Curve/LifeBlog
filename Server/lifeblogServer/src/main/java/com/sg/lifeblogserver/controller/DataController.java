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
        return ResponseEntity.ok(categories.getAllCategories());
    }
    
    @RequestMapping(value="/posts/{sort}", method=RequestMethod.GET)
    public ResponseEntity fetchPosts(@PathVariable("sort") String sorting){
        switch(sorting){
            case "homedecor":
                return ResponseEntity
                        .ok(posts.getPostsByCategory("homedecor"));
            case "fashion":
                return ResponseEntity
                        .ok(posts.getPostsByCategory("fashion"));
            case "automotive":
                return ResponseEntity
                        .ok(posts.getPostsByCategory("automotive"));
            case "health":
                return ResponseEntity
                        .ok(posts.getPostsByCategory("health"));
            default:
                //DEFAULT = NO SORTING. SEND ALL POSTS
                return ResponseEntity
                        .ok(posts.getAllPosts());
        }
    }
    
    @RequestMapping(value="/u/{username}", method=RequestMethod.GET)
    public ResponseEntity fetchUser(@PathVariable("username") String username){
        User u = users.getUserByUsername(username);
        if(u == null) return ResponseEntity.badRequest()
                .body("User not found.");
        return ResponseEntity.ok(u);
        /*
        I think it would be a good idea for us to add more things to the user table,
        like join date, connections (to other users), blog posts(could be queried),
        etc. That way we have more filler for the user page.
        */
    }
    
    @RequestMapping(value="post/{postId}", method=RequestMethod.GET)
    public ResponseEntity fetchPost(@PathVariable("postId") int id){
        Post p = posts.getPostById(id);
        if(p == null) return ResponseEntity.badRequest()
                .body("Post #" + id + " not found.");
        return ResponseEntity.ok(p);
    }
    
}
