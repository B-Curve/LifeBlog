/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.model;

import java.time.LocalDate;

/**
 *
 * @author asmat
 */
public class Reply {

    private long id;

//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinColumn(name = "postid", referencedColumnName = "id")
//    private Post post;
    
    private String reply;
    private LocalDate replydate;
    private long replierid;
    private long likes;
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

//    public Post getPost() {
//        return post;
//    }
//
//    public void setPost(Post post) {
//        this.post = post;
//    }

    public String getReply() {
        return reply;
    }

    public void setReply(String reply) {
        this.reply = reply;
    }

    public LocalDate getReplydate() {
        return replydate;
    }

    public void setReplydate(LocalDate replydate) {
        this.replydate = replydate;
    }

    public long getReplierid() {
        return replierid;
    }

    public void setReplierid(long replierid) {
        this.replierid = replierid;
    }

    public long getLikes() {
        return likes;
    }

    public void setLikes(long likes) {
        this.likes = likes;
    }

}
