import React from 'react';
import axios from 'axios';
import './styles/accountDesktop.css';

const host = "http://localhost:8080/lifeblogServer/api/";

export default class Account extends React.Component{

  constructor(){
    super();

    this.state = {
      account: null
    }
  }

  componentWillMount(){
    axios.get(host+"/user/1").then((response) => {
      this.setState({account: response.data});
      console.log(response.data);
    });
  }

  getUser = () => {
    let a = this.state.account;
    if(this.state.account == null) return;
    return(
      <div>
        <section className="left-side">
          <div className="username">
            <h1>{a.username}</h1>
            <span className="name">{a.firstname} {a.lastname}</span>
            <ul className="roles">
            <h3 className="roles-header">Roles</h3>
            {a.roles.map((item, index) => {
              switch(item.role.toString()){
                case "ROLE_USER":
                  return <li key={index} className="role" style={{color: '#44f'}}>USER</li>;
                case "ROLE_ADMIN":
                  return <li key={index} className="role" style={{color: '#2d4'}}>ADMIN</li>;
              }
            })}
            </ul>
          </div>
        </section>
      </div>
    );
  }

  render(){
    const USER = this.getUser();
    return(
      <div className="user-container">
        {USER}
      </div>
    );
  }
}
