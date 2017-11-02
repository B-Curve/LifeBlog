/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.Category;
import com.sg.lifeblogserver.util.HibernateUtil;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author asmat
 */
public class CategoryDaoImpl implements CategoryDao {

    private Transaction tx;

    @Override
    public List<Category> getAll() {
        try (Session session = HibernateUtil.getSession()) {
            return session.createQuery("SELECT c FROM Category c").list();
        }
    }

    @Override
    public Category getById(long id) {
        try (Session session = HibernateUtil.getSession()) {
            return session.get(Category.class, id);
        }
    }

    @Override
    public Category add(Category category) {
        try (Session session = HibernateUtil.getSession()) {
            session.saveOrUpdate(category);
            return category;
        }
    }

    @Override
    public Category update(Category category) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            session.update(category);
            session.flush();
            tx.commit();
            return category;

        }
    }

    @Override
    public void delete(long id) {
        try (Session session = HibernateUtil.getSession()) {
            Category category = session.get(Category.class, id);
            session.delete(category);

        }
    }

}
