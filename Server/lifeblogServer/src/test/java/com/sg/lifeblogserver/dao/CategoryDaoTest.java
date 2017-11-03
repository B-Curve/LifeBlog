/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.Category;
import com.sg.lifeblogserver.util.DatabaseInitializer;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 *
 * @author asmat
 */
public class CategoryDaoTest {

    CategoryDao categorydao;

    public CategoryDaoTest() {
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
        categorydao = ctx.getBean("categorydao", CategoryDao.class);
        DatabaseInitializer.setKnownGoodState();
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of getAll method, of class CategoryDao.
     */
    @Test
    public void testGetAll() {
        Category category = new Category();
        category.setName("Travel");
        categorydao.add(category);

        category.setName("Food");
        categorydao.add(category);

        category.setName("Fashion");
        categorydao.add(category);

        assertEquals(categorydao.getAll().size(), 3);
    }

    /**
     * Test of getById method, of class CategoryDao.
     */
    @Test
    public void testGetById() {
        Category category = new Category();
        category.setName("Fashion");

        Category fromDao = categorydao.add(category);
        assertEquals("Fashion", categorydao.getById(fromDao.getId()).getName());
    }

    /**
     * Test of add method, of class CategoryDao.
     */
    @Test
    public void testAdd() {
        Category category = new Category();
        category.setName("Travel");

        Category fromDao = categorydao.add(category);
        assertEquals(category, fromDao);
    }

    /**
     * Test of update method, of class CategoryDao.
     */
    @Test
    public void testUpdate() {

        Category category = new Category();
        category.setName("Travel");

        Category fromDao = categorydao.add(category);
        assertEquals(category, fromDao);

        category.setDescription("All things related to Travel");
        fromDao = categorydao.update(category);
        assertEquals(category, fromDao);
    }

    /**
     * Test of delete method, of class CategoryDao.
     */
    @Test
    public void testDelete() {
        Category category = new Category();
        category.setName("Travel");

        Category fromDao = categorydao.add(category);
        assertEquals(category, fromDao);
        
        categorydao.delete(category.getId());
        
        assertNull(categorydao.getById(category.getId()));

    }
}
