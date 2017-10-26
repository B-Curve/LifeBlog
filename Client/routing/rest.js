'use strict';
const express = require('express');
const router = express.Router();

const posts = {
  post5342: {
    postId: 5342,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'bedroom.jpg',
    Likes: 27
  },
  post3234: {
    postId: 3234,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'kitchen.jpg',
    Likes: 27
  },
  post6545: {
    postId: 6545,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'kitchen.jpg',
    Likes: 27
  },
  post3994: {
    postId: 3994,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'kitchen.jpg',
    Likes: 27
  },
  post55231: {
    postId: 55231,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'kitchen.jpg',
    Likes: 27
  },
  post53342: {
    postId: 53342,
    userId: 72345,
    categoryId: 1,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'iphonex.jpg',
    Likes: 27
  },
  post3214: {
    postId: 3214,
    userId: 72345,
    categoryId: 1,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'tedtech.jpg',
    Likes: 27
  },
  post2341: {
    postId: 2341,
    userId: 72345,
    categoryId: 1,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'tedtech.jpg',
    Likes: 27
  },
  post4312: {
    postId: 4312,
    userId: 72345,
    categoryId: 1,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'tedtech.jpg',
    Likes: 27
  },
  post1234: {
    postId: 1234,
    userId: 72345,
    categoryId: 1,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: 'tedtech.jpg',
    Likes: 27
  }
};

router.get('/posts/category/:id', (req, res) => {
  if(req.params.id == 1){
    res.json(["Tech",posts.post53342,posts.post3214,posts.post2341,posts.post4312,posts.post1234]);
  }else if(req.params.id == 2){
    res.json(["Home Decor",posts.post5342,posts.post3234,posts.post6545,posts.post3994,posts.post55231]);
  }
});

router.get('/post/id/:id', (req, res) => {
  res.json(posts[req.params.id]);
});

module.exports = router;
