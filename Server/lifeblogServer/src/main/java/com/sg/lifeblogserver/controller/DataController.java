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

    @RequestMapping(value = "/post/categories", method = RequestMethod.GET)
    public ResponseEntity fetchPostsAllCategory() {

        return null;//ResponseEntity.ok(u);
    }

    @RequestMapping(value = "/post/category/{id}", method = RequestMethod.GET)
    public ResponseEntity fetchPostsCategory(@PathVariable("id") long id){ //, @RequestHeader("offset") long offset) {

        Category category = categoryDao.getById(id);
        if (category == null) {
            return ResponseEntity.badRequest()
                    .body("Category #" + id + " not found.");
        }
        List<Post> posts = postDao.getByCategory(id);
        return ResponseEntity.ok(posts);
    }

    @RequestMapping(value = "/u/{username}", method = RequestMethod.GET)
    public ResponseEntity fetchUser(@PathVariable("username") String username) {
        User user = userDao.getByUsername(username);
        if (user == null) {
            return ResponseEntity.badRequest()
                    .body("User not found.");
        }
        return ResponseEntity.ok(user);
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
    
    @RequestMapping(value = "/post", method = RequestMethod.PUT)
    public ResponseEntity createPost(@RequestBody Post post) {
//        if (post == null) {
//            return ResponseEntity.badRequest()
//                    .body("Post #" + id + " not found.");
//        }
        return ResponseEntity.ok(post);
    }

}
