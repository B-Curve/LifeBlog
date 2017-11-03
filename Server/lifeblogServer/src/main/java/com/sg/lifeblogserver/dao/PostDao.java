/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.Post;
import java.util.List;

/**
 *
 * @author asmat
 */
public interface PostDao {
    
    Post getById(long id);
    
    List<Post> getAll();
    
    List<Post> getByCategory(long id);
    
    List<Post> getTopFiveAllCategory();
    
    Post add(Post post);
    
    Post update(Post post);
    
    void delete(long id);
    
}
