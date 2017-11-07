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
import com.sg.lifeblogserver.model.Category;
import com.sg.lifeblogserver.model.request.PostRequest;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
    CategoryDao categoryDao;
    @Autowired
    UserDao userDao;
    @Autowired
    PostDao postDao;
    
    @RequestMapping(value = "/categories", method = RequestMethod.GET)
    public ResponseEntity fetchCategories() {
        return ResponseEntity.ok(categoryDao.getAll());
    }
    
    @RequestMapping(value = "/post/category/{id}", method = RequestMethod.GET)
    public ResponseEntity fetchPostsCategory(@PathVariable("id") long id) { //, @RequestHeader("offset") long offset) {

        Category category = categoryDao.getById(id);
        if (category == null) {
            return ResponseEntity.badRequest()
                    .body("Category #" + id + " not found.");
        }
        List<Post> posts = postDao.getByCategory(id);
        return ResponseEntity.ok(posts);
    }
    
    @RequestMapping(value = "/post/category/", method = RequestMethod.GET)
    public ResponseEntity fetchPostsAllCategory() {
        
        List<Post> posts = postDao.getTopFiveAllCategory();
        return ResponseEntity.ok(posts);
    }
    
    @RequestMapping(value = "/post/user/{id}", method = RequestMethod.GET)
    public ResponseEntity fetchPostsUser(@PathVariable("id") long id) {
        
        User user = userDao.getById(id);
        if (user == null) {
            return ResponseEntity.badRequest()
                    .body("User #" + id + " not found.");
        }
        List<Post> posts = postDao.getByUser(id);
        return ResponseEntity.ok(posts);
    }
    
    @RequestMapping(value = "/post/{id}", method = RequestMethod.GET)
    public ResponseEntity fetchPost(@PathVariable("id") int id) {
        Post post = postDao.getById(id);
        if (post == null) {
            return ResponseEntity.badRequest()
                    .body("Post #" + id + " not found.");
        }
        return ResponseEntity.ok(post);
    }
    
    @RequestMapping(value = "/post/{id}", method = RequestMethod.PUT)
    public ResponseEntity updatePost(@PathVariable("id") long id, @RequestBody PostRequest postRequest) {
        
        Post post = postDao.getById(id);
        if (post == null) {
            return ResponseEntity.badRequest()
                    .body("Post #" + id + " not found.");
        }
        
        if (!postRequest.getTitle().isEmpty()) {
            post.setTitle(postRequest.getTitle());
        }
        if (!postRequest.getBody().isEmpty()) {
            post.setBody(postRequest.getBody());
        }
        if (!postRequest.getCategory().isEmpty()) {
            Category category = categoryDao.getById(Long.parseLong(postRequest.getCategory()));
            post.setCategory(category);
        }
        
        if (!postRequest.getLikes().isEmpty()) {
            post.setLikes(Integer.parseInt(postRequest.getLikes()));
        }
        postDao.update(post);
        return ResponseEntity.ok(post);
    }
    
    @RequestMapping(value = "/post", method = RequestMethod.PUT)
    public ResponseEntity createPost(@RequestBody PostRequest postRequest) {

        //Validate the Post
        Post post = new Post();
        post.setTitle(postRequest.getTitle());
        post.setBody(postRequest.getBody());
        
        User user = userDao.getById(Long.parseLong(postRequest.getUser()));
        post.setUser(user);
        
        Category category = categoryDao.getById(Long.parseLong(postRequest.getCategory()));
        post.setCategory(category);
        
        LocalDate postDate = LocalDate.parse(postRequest.getPostDate(), DateTimeFormatter.ISO_DATE);
        post.setPostdate(postDate);
        
        postDao.add(post);
        return ResponseEntity.ok(post);
    }
    
    
}
