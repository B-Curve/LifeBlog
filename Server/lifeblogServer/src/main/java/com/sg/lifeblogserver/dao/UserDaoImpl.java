/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.User;
import com.sg.lifeblogserver.util.HibernateUtil;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

/**
 *
 * @author asmat
 */
public class UserDaoImpl implements UserDao {

    private static final String GET_BY_USER_NAME = "FROM User as u "
            + " WHERE u.username = :username";
    private Transaction tx;

    @Override
    public List<User> getAll() {
        try (Session session = HibernateUtil.getSession()) {
            return session.createQuery("SELECT u FROM User u").list();
        }
    }

    @Override
    public User getByUsername(String username) {
        try (Session session = HibernateUtil.getSession()) {
            Query query = session.createQuery(GET_BY_USER_NAME);
            query.setParameter("username", username);
            return (User)query.uniqueResult();
        }
    }

    @Override
    public User getById(int id) {
        try (Session session = HibernateUtil.getSession()) {
            return session.get(User.class, id);
        }
    }

    @Override
    public User add(User user) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            session.saveOrUpdate(user);
            tx.commit();
            return user;
        }
    }

    @Override
    public User update(User user) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            session.update(user);
            session.flush();
            tx.commit();
            return user;
        }
    }

    @Override
    public void delete(long id) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            User user = session.get(User.class, id);
            session.delete(user);
            tx.commit();
        }
    }
}
