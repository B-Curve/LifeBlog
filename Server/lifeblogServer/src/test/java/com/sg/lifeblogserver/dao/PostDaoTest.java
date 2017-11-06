/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.Category;
import com.sg.lifeblogserver.model.Post;
import com.sg.lifeblogserver.model.User;
import com.sg.lifeblogserver.util.DatabaseInitializer;
import java.time.LocalDate;
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
    UserDao userdao;
    CategoryDao categorydao;

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
        userdao = ctx.getBean("userdao", UserDao.class);
        categorydao = ctx.getBean("categorydao", CategoryDao.class);
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
        user.setFirstname("abc");
        user.setLastname("abc");
        user.setUsername("abc");
        user.setPassword("abc");
        user.setEnabled(1);
        userdao.add(user);

        Category category = new Category();
        category.setName("Home");
        category = categorydao.add(category);

        Post post = new Post();
        post.setUser(user);
        post.setCategory(category);
        post.setTitle("Test Post");
        post.setBody("This blog post has been created for testing purposes only");
        post.setLikes(200);
        post.setPostdate(LocalDate.now());

        Post fromdao = postdao.add(post);
        assertNotNull(postdao.getById(post.getId()));
    }

    /**
     * Test of getAll method, of class PostDao.
     */
    @Test
    public void testGetAll() {
        User user = new User();
        user.setFirstname("abc");
        user.setLastname("abc");
        user.setUsername("abc");
        user.setPassword("abc");
        user.setEnabled(1);
        userdao.add(user);

        Category category = new Category();
        category.setName("Home");
        category = categorydao.add(category);

        Post post1 = new Post();
        post1.setUser(user);
        post1.setCategory(category);
        post1.setTitle("Test Post");
        post1.setBody("This blog post has been created for testing purposes only");
        post1.setLikes(200);
        post1.setPostdate(LocalDate.now());

        postdao.add(post1);

        Post post2 = new Post();
        post2.setUser(user);
        post2.setCategory(category);
        post2.setTitle("Second test Post");
        post2.setBody("This blog post has also been created for testing purposes only");
        post2.setLikes(200);
        post2.setPostdate(LocalDate.now());

        postdao.add(post2);

        assertEquals(2, postdao.getAll().size());

    }

    /**
     * Test of getByCategory method, of class PostDao.
     */
    @Test
    public void testGetByCategory() {
        User user = new User();
        user.setFirstname("abc");
        user.setLastname("abc");
        user.setUsername("abc");
        user.setPassword("abc");
        user.setEnabled(1);
        userdao.add(user);

        Category category = new Category();
        category.setName("Home");
        category = categorydao.add(category);

        Post post1 = new Post();
        post1.setUser(user);
        post1.setCategory(category);
        post1.setTitle("Test Post");
        post1.setBody("This blog post has been created for testing purposes only");
        post1.setLikes(200);
        post1.setPostdate(LocalDate.now());
        postdao.add(post1);

        Post post2 = new Post();
        post2.setUser(user);
        post2.setCategory(category);
        post2.setTitle("Second test Post");
        post2.setBody("This blog post has also been created for testing purposes only");
        post2.setLikes(200);
        post2.setPostdate(LocalDate.now());
        postdao.add(post2);
        //assertEquals(2, postdao.getByCategory(category.getId(), 10).size());
    }

    /**
     * Test of add method, of class PostDao.
     */
    @Test
    public void testAdd() {
        User user = new User();
        user.setFirstname("abc");
        user.setLastname("abc");
        user.setUsername("abc");
        user.setPassword("abc");
        user.setEnabled(1);
        userdao.add(user);

        Category category = new Category();
        category.setName("Home");
        category = categorydao.add(category);

        Post post = new Post();
        post.setUser(user);
        post.setCategory(category);
        post.setTitle("Test Post");
        post.setBody("This blog post has been created for testing purposes only");
        post.setLikes(200);
        post.setPostdate(LocalDate.now());

        Post fromdao = postdao.add(post);
        Post newPost = postdao.getById(post.getId());
        assertEquals(newPost.getTitle(), "Test Post");
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

}
