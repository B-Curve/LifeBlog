/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

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
public class UserDaoTest {

    UserDao userdao;
    
    public UserDaoTest() {
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
        userdao = ctx.getBean("userdao", UserDao.class);
      //  DatabaseInitializer.setKnownGoodState();
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of getAll method, of class UserDao.
     */
    @Test
    public void testGetAll() {
    }

    /**
     * Test of getByUsername method, of class UserDao.
     */
    @Test
    public void testGetByUsername() {
    }

    /**
     * Test of getById method, of class UserDao.
     */
    @Test
    public void testGetById() {
    }

    /**
     * Test of add method, of class UserDao.
     */
    @Test
    public void testAdd() {
//        User user = new User();
//        user.setFirstname("admin");
//        user.setLastname("admin");
//        user.setUsername("admin");
//        user.setPassword("admin");
//        user.setEnabled(1);
//
//        User fromdao = userdao.add(user);
//        assertEquals(fromdao, user);
        
        User confirmUser = userdao.getByUsername("admin");
       // assertEquals(confirmUser, user);
    }

    /**
     * Test of update method, of class UserDao.
     */
    @Test
    public void testUpdate() {
    }

    /**
     * Test of delete method, of class UserDao.
     */
    @Test
    public void testDelete() {
    }

    public class UserDaoImpl implements UserDao {

        public List<User> getAll() {
            return null;
        }

        public User getByUsername(String username) {
            return null;
        }

        public User getById(int id) {
            return null;
        }

        public User add(User user) {
            return null;
        }

        public User update(User user) {
            return null;
        }

        public void delete(long id) {
        }
    }

}
