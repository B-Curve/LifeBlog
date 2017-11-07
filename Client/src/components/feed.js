import React from 'react';
import './styles/homeDesktop.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const host = "http://localhost:8080/lifeblogServer/api/";

// const PostBig = (props) => {
//
//   function formatBody(body){
//     if(body.length > 12){
//       return body.substring(0, 72).trim() + "...";
//     }
//     return body;
//   }
//
//   return(
//     <div className="postContainerLg">
//       {/* <img src={props.post.ImgSrc} className="postImage" alt="image" /> */}
//       <h1 className="postHead"
//         onClick={() => window.location.pathname = '/post/'+props.post.postId}>{props.post.title}</h1>
//       <div className="postDate">
//         {/* <p>Post Date: {props.post.Date}</p> */}
//       </div>
//       <p>{formatBody(props.post.body)}</p>
//     </div>
//   );
// }
//
// const PostSmall = (props) => {
//
//   function formatBody(body){
//     if(body.length > 12){
//       return body.substring(0, 24).trim() + "...";
//     }
//     return body;
//   }
//
//   return(
//     <ul className="doublePostBox">
//       <li>
//         <div className="doubleBoxItem">
//           {/* <img src={props.p1.ImgSrc} className="postImage" alt="image" /> */}
//         <h1 className="postHead"
//             onClick={() => window.location.pathname = '/post/'+props.p1.postId}>{props.p1.title}</h1>
//           <div className="postDate">
//             {/* <p>Post Date: {props.p1.Date}</p> */}
//           </div>
//           <p>{formatBody(props.p1.body)}</p>
//         </div>
//       </li>
//       <li>
//         <div className="doubleBoxItem">
//           {/* <img src={props.p2.ImgSrc} className="postImage" alt="image" /> */}
//         <h1 className="postHead"
//             onClick={() => window.location.pathname = '/post/'+props.p2.postId}>{props.p2.title}</h1>
//           <div className="postDate">
//             {/* <p>Post Date: {props.p2.Date}</p> */}
//           </div>
//           <p>{formatBody(props.p2.body)}</p>
//         </div>
//       </li>
//     </ul>
//   );
// }

export default class Feed extends React.Component{

  constructor(){
    super();

    this.state = {
      posts: [],
      categories: [],
      titles: []
    }
    axios.get(host+"/post/1002")
      .then((response) => {
        console.log(response.data);
      })
  }



  render(){
    return(
      <div>
        <ul className="post-list">
          <ul className="post-section">

          </ul>
        </ul>
      </div>
    );
  }
}
