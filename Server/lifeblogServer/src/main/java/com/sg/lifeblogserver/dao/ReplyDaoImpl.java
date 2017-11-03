/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.dao;

import com.sg.lifeblogserver.model.Reply;
import com.sg.lifeblogserver.util.HibernateUtil;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

/**
 *
 * @author asmat
 */
public class ReplyDaoImpl implements ReplyDao {

    private static final String GET_BY_POST = "SELECT r.* FROM Reply r "
            + " INNER JOIN Post p on p.id = r.postid "
            + " WHERE p.id = :postid";

    private static final String GET_BY_USER = "SELECT r.* FROM Reply r "
            + " INNER JOIN Post p on p.id = r.postid "
            + " WHERE p.userid = :userid";
    
    private Transaction tx;

    @Override
    public Reply getById(long id) {
        try (Session session = HibernateUtil.getSession()) {
            return session.get(Reply.class, id);
        }
    }

    @Override
    public List<Reply> getAllByPostId(long id) {
        try (Session session = HibernateUtil.getSession()) {
            Query query = session.createQuery(GET_BY_POST);
            query.setParameter("postid", id);
            return query.list();
        }
    }

    @Override
    public List<Reply> getAllByUserId(long id) {
        try (Session session = HibernateUtil.getSession()) {
            Query query = session.createQuery(GET_BY_USER);
            query.setParameter("userid", id);
            return query.list();
        }
    }

    @Override
    public Reply add(Reply reply) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            session.save(reply);
            tx.commit();
            return reply;
        }
    }

    @Override
    public Reply update(Reply reply) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            session.update(reply);
            session.flush();
            tx.commit();
            return reply;
        }
    }

    @Override
    public void delete(long id) {
        try (Session session = HibernateUtil.getSession()) {
            tx = session.beginTransaction();
            Reply reply = session.get(Reply.class, id);
            session.delete(reply);
            tx.commit();
        }
    }
}
