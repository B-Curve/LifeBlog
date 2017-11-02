/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.Category;
import java.util.List;

/**
 *
 * @author asmat
 */
public interface CategoryDao {
    
    List<Category> getAll();
    Category getById();
    Category add(Category category);
    Category update(Category category);
    void delete(Category category);
}
