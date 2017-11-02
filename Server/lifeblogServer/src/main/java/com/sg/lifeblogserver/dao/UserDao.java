/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import java.util.List;
import com.sg.lifeblogserver.model.User;

/**
 *
 * @author brandonkervin
 */
public interface UserDao {

    List<User> getAll();

    User getByUsername(String username);

    User getById(int id);
    
    User add(User user);
    
    User update(User user);
    
    void delete(long id);

}
