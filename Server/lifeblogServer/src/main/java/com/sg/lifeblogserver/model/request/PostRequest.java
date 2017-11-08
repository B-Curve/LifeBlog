/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.lifeblogserver.model.request;

/**
 *
 * @author asmat
 */
public class PostRequest {

    private String postId; //Used only for updates
    private String user;
    private String category;
    private String postDate;
    private String title;
    private String body;
    private String likes;
    private String reply;
    private String replydate;
    private String replierid;

    public String getReply() {
        return reply;
    }

    public void setReply(String reply) {
        this.reply = reply;
    }

    public String getReplydate() {
        return replydate;
    }

    public void setReplydate(String replydate) {
        this.replydate = replydate;
    }

    public String getReplierid() {
        return replierid;
    }

    public void setReplierid(String replierid) {
        this.replierid = replierid;
    }

    public String getLikes() {
        return likes;
    }

    public void setLikes(String likes) {
        this.likes = likes;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPostDate() {
        return postDate;
    }

    public void setPostDate(String postDate) {
        this.postDate = postDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

}
