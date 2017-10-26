import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { css } from './styles/home';
import axios from 'axios';
import AccountForm from './AccountForm';

const PostBig = (props) => {
  return(
    <div style={css.postContainerLg}>
      <img src={props.post.ImgSrc} style={css.postImage} alt="image" />
      <h1 style={css.postHead}
        onClick={() => window.location.pathname = '/post/'+props.post.postId}>{props.post.Title}</h1>
      <div style={css.postBody}>
        <p>Post Date: {props.post.Date}</p>
      </div>
    </div>
  );
}

const PostSmall = (props) => {
  return(
    <ul style={css.doublePostBox}>
      <li>
        <div style={css.doubleBoxItem}>
          <img src={props.p1.ImgSrc} style={css.postImage} alt="image" />
          <h1 style={css.postHead}
            onClick={() => window.location.pathname = '/post/'+props.p1.postId}>{props.p1.Title}</h1>
          <div style={css.postBody}>
            <p>Post Date: {props.p1.Date}</p>
          </div>
        </div>
      </li>
      <li>
        <div style={css.doubleBoxItem}>
          <img src={props.p2.ImgSrc} style={css.postImage} alt="image" />
          <h1 style={css.postHead}
            onClick={() => window.location.pathname = '/post/'+props.p2.postId}>{props.p2.Title}</h1>
          <div style={css.postBody}>
            <p>Post Date: {props.p2.Date}</p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      posts: [],
      loggedIn: false,
      titles: []
    }
    axios.get("rest/posts/category/1")
      .then((response) => {
        let title = response.data.shift();
        this.setState({
          posts: [...this.state.posts, response.data],
          titles: this.state.titles.concat(title)
        });
      });
    axios.get("rest/posts/category/2")
      .then((response) => {
        let title = response.data.shift();
        this.setState({
          posts: [...this.state.posts, response.data],
          titles: this.state.titles.concat(title)
        });
      });
  }

  greeting(){
    if(!this.state.loggedIn){
      return <AccountForm />;
    }
  }

  render(){
    return(
      <div>
        <header style={css.header}>
          <h1 style={Object.assign({}, css.header_h1, css.hl)}
            onClick={() => window.location.pathname = '/'}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'black'}>Lifestyle Blog
          </h1>
          <h3 style={Object.assign({}, css.header_h1, css.hr)}>Not Signed In</h3>
        </header>
        {this.greeting()}
        <Switch>
          <Route exact path="/">
            <div>
              <section style={css.allPosts}>
                {this.state.posts.map((posts, index) =>
                  <div key={index}>
                    <h1>{this.state.titles[index]}</h1>
                    <div style={{display: 'inline-flex', margin: '0 auto', paddingBottom: '12px'}}>
                      <PostBig post={posts[0]} />
                      <PostSmall p1={posts[1]} p2={posts[2]} />
                      <PostSmall p1={posts[3]} p2={posts[4]} />
                    </div>
                    <br />
                  </div>
                )}
              </section>
            </div>
          </Route>
          <Route path="/post">

          </Route>
        </Switch>
      </div>
    );
  }
}
