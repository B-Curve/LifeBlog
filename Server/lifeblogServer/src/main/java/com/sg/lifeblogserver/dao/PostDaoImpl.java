/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.Post;
import com.sg.lifeblogserver.util.HibernateUtil;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

/**
 *
 * @author asmat
 */
public class PostDaoImpl implements PostDao {

    private Transaction tx;
    
    //Query to retrieve all post for a given category in descending order of poastdate
    private static final String GET_BY_CATEGORY = "Select p from Post p "
            + " inner join p.category as c "
            + " where c.id = :categoryId "
            + " order by p.postdate desc ";

    //Query to retrieve most liked posts for a category
    private static final String GET_TOP_FIVE = "Select p from Post p "
            + " inner join p.category as c "
            + " where c.id = :categoryId "
            + " order by likes desc ";
           

    @Override
    public Post getById(long id) {
        try (Session session = HibernateUtil.getSession()) {
            return session.get(Post.class, id);
        }
    }

    @Override
    public List<Post> getAll() {
        try (Session session = HibernateUtil.getSession()) {
            return session.createQuery("SELECT p FROM Post p").list();
        }
    }

    @Override
    public List<Post> getByCategory(long id) {
        try (Session session = HibernateUtil.getSession()) {
            Query query = session.createQuery(GET_BY_CATEGORY);
            query.setParameter("categoryId", id);
//            query.setFirstResult((int)offset);
            query.setMaxResults(20);
            return query.list();
        }
    }

    @Override
    public List<Post> getTopFiveAllCategory() {
        try (Session session = HibernateUtil.getSession()) {
            Query query = session.createQuery(GET_TOP_FIVE);
            //query.setParameter("categoryId", id);
            return query.list();
        }
    }

    @Override
    public Post add(Post post) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            session.saveOrUpdate(post);
            tx.commit();
            return post;
        }
    }

    @Override
    public Post update(Post post) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            session.update(post);
            session.flush();
            tx.commit();
            return post;
        }
    }

    @Override
    public void delete(long id) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            Post post = session.get(Post.class, id);
            session.delete(post);
            tx.commit();
        }
    }
}
