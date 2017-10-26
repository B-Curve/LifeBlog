'use strict';
const express = require('express');
const router = express.Router();

router.get('/posts/', (req, res) => {
  let post1 = {
    postId: 1,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: null,
    Likes: 27
  };
  let post2 = {
    postId: 1,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: null,
    Likes: 27
  };
  let post3 = {
    postId: 1,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: null,
    Likes: 27
  };
  let post4 = {
    postId: 1,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: null,
    Likes: 27
  };
  let post5 = {
    postId: 1,
    userId: 72345,
    categoryId: 2,
    Title: 'Welcome to Lifestyle Blog!',
    Body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    Date: '2017-10-26',
    ImgSrc: null,
    Likes: 27
  };
  res.json([post1,post2,post3,post4,post5]);
});

module.exports = router;
