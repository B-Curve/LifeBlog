/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.Reply;
import java.util.List;

/**
 *
 * @author asmat
 */
public interface ReplyDao {
    
    Reply getById(long id);
    
    List<Reply> getAllByPostId(long id);
    
    List<Reply> getAllByUserId(long id);

    Reply add(Reply reply);
    
    Reply update(Reply reply);
    
    void delete(long id);
}
