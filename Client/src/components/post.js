import React from 'react';
import axios from 'axios';
import './styles/viewPostDesktop.css';

const host = "http://localhost:8080/lifeblogServer/api/";

export default class Post extends React.Component{

  constructor(){
    super();
    this.state = {
      post: null,
      replyBody: '',
      replyOpen: false,
      id: 0,
      replies: null
    }
  }

  componentWillMount(){
    let id = window.location.pathname.split("post/")[1];
    axios.get(host+"post/"+id)
      .then((response) => {
        this.setState({post: response.data, id: parseInt(id)});
      })
    axios.get(host+"reply/post/"+id)
      .then((response) => {
        this.setState({replies: response.data});
      });
  }

  buildDate = (date) => {
    let dayOfWeekSecondary = date.dayOfWeek.slice(1);
    let dayOfWeekPrimary = date.dayOfWeek.charAt(0);
    const dayOfWeek = dayOfWeekPrimary + dayOfWeekSecondary.toLowerCase();
    let monthPrimary = date.month.charAt(0);
    let monthSecondary = date.month.slice(1);
    const month = monthPrimary + monthSecondary.toLowerCase();
    let fullDate = dayOfWeek + ", " + month + " " + date.dayOfMonth + ", " + date.year;
    return fullDate;
  };

  updateReply(e){
    let value = e.target.value;
    if(value.length > 500) return;
    this.setState({replyBody: value});
  }

  reply(){
    if(this.state.replyOpen){
      this.setState({replyOpen: false, replyBody: ""});
    }else{
      this.setState({replyOpen: true});
    }
  }

  getStyles(size){
    if(size === 500) return {color:'red'};
    if(size >= 475) return {color:'orange'};
    if(size >= 450) return {color:'yellow'};
  }

  submitReply(){
    let reply = {
      postId: this.state.id,
      user: "",
      category: "",
      postdate: "",
      title: "",
      body: "",
      liked: false,
      reply: this.state.replyBody,
      replierid: this.props.userId,
      replydate: new Date().toISOString().split("T")[0]
    };
    axios.put(host+"post/"+this.state.id, reply, {headers: {token: this.props.token}})
    window.location.reload();
  }

  openReply(){
    if(this.state.replyOpen){
      return(
        <div className="reply-container">
          <textarea type="text" className="reply-body"
            value={this.state.replyBody}
            onChange={this.updateReply.bind(this)}></textarea>
          <span style={this.getStyles(this.state.replyBody.length)}
            className="text-count">{this.state.replyBody.length}/500</span>
          <p className="submit-reply" onClick={this.submitReply.bind(this)}>Submit</p>
        </div>
      );
    }else{
      return null;
    }
  }

  getPost = () => {
    if(this.state.post === null) return;
    return(
      <div>
        <p className="view-id">#{this.state.post.id}</p>
        <p className="view-category">{this.state.post.category.name}</p>
        <p className="view-date">{this.buildDate(this.state.post.postdate)}</p>
        <h1 className="view-title">{this.state.post.title}</h1>
        <p className="view-body">{this.state.post.body}</p>
        <p className="view-likes">Likes: {this.state.post.likes}</p>
        <p className="view-poster">Posted By: {this.state.post.user.username}</p>
        {this.props.token !== null ?
        <p className="view-make-reply" onClick={this.reply.bind(this)}>REPLY</p>:
        null}
      </div>
    );
  };

  getReplies = () => {
    if(this.state.replies === null) return;
    if(this.state.replies.length === 0) return <h1>This Post Has No Replies, Be The First!</h1>;
    return(
      <div className="reply-list">
        {this.state.replies.map((item, index) =>
          <h1 className="post-reply" key={index}>{item.reply} - <span style={{color:'blue'}}>{item.replier.username}</span></h1>
        )}
      </div>
    );
  };

  render(){
    return(
      <div style={{textAlign:'center',backgroundImage:"url('/eiffel.jpg')",backgroundRepeat:'none',
        backgroundAttachment:'fixed',backgroundSize:'cover',height:'100%',paddingTop:'3em'}}>
        <div className="view-container">
          {this.getPost()}
        </div>
        {this.openReply()}
        {this.getReplies()}
      </div>
    );
  }
}
