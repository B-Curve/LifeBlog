/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.Post;
import com.sg.lifeblogserver.model.User;
import com.sg.lifeblogserver.util.DatabaseInitializer;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 *
 * @author asmat
 */
public class PostDaoTest {
    
    PostDao postdao;
    
    public PostDaoTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("test-applicationContext.xml");
        postdao = ctx.getBean("postdao", PostDao.class);
        DatabaseInitializer.setKnownGoodState();
        
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of getById method, of class PostDao.
     */
    @Test
    public void testGetById() {
        User user = new User();
        Post post = new Post();
        post.setUser(user);
    }

    /**
     * Test of getAll method, of class PostDao.
     */
    @Test
    public void testGetAll() {
    }

    /**
     * Test of getByCategory method, of class PostDao.
     */
    @Test
    public void testGetByCategory() {
    }

    /**
     * Test of add method, of class PostDao.
     */
    @Test
    public void testAdd() {
    }

    /**
     * Test of update method, of class PostDao.
     */
    @Test
    public void testUpdate() {
    }

    /**
     * Test of delete method, of class PostDao.
     */
    @Test
    public void testDelete() {
    }

    public class PostDaoImpl implements PostDao {

        public Post getById(long id) {
            return null;
        }

        public List<Post> getAll() {
            return null;
        }

        public List<Post> getByCategory(long id) {
            return null;
        }

        public Post add(Post post) {
            return null;
        }

        public Post update(Post post) {
            return null;
        }

        public void delete(long id) {
        }
    }
    
}
