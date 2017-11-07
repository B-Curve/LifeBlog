import React from 'react';
import axios from 'axios';

const host = "http://localhost:8080/lifeblogServer/";

export default class AccountForm extends React.Component{

  constructor(){
    super();
    this.state = {
      prompt: 'guest',
      loggingIn: false,
      username: '',
      password: ''
    }
  }

  login(){
    this.setState({loggingIn: true});
  }

  updateUsername(e){
    let value = e.target.value;
    if(value.length > 16) return;
    this.setState({username: value});
  }

  updatePassword(e){
    let value = e.target.value;
    this.setState({password: value});
  }

  undoLogin(){
    this.setState({
      loggingIn: false,
      username: '',
      password: ''
    });
  }

  submitLogin(){
    axios.post(host+"login?username="+this.state.username+"&password="+this.state.password)
      .then((response) => {
        this.props.token(response.data);
      });
  }

  render(){
    return(
      <section className="body" style={{backgroundImage: "url('fashion.jpg')"}}>
        <div className="image-description">
          {this.state.loggingIn ?
            <LoggingIn
              username={this.state.username}
              password={this.state.password}
              updateUsername={this.updateUsername.bind(this)}
              updatePassword={this.updatePassword.bind(this)}
              undoLogin={this.undoLogin.bind(this)}
              loginUser={this.submitLogin.bind(this)}
            /> :
            <GetButtons login={this.login.bind(this)} />}
        </div>
      </section>
    );
  }
}

const LoggingIn = (props) => {
  return(
    <div>
      <input type="username" className="accountInput" placeholder="Username..."
        value={props.username} onChange={props.updateUsername} />
      <input type="password" className="accountInput"  placeholder="Password..."
        value={props.password} onChange={props.updatePassword} /><br />
      <button type="button" className="accountButton" onMouseDown={props.loginUser}>SUBMIT</button>
      <button type="button" className="accountButton" onMouseDown={props.undoLogin}>GO BACK</button>
    </div>
  );
}

const GetButtons = (props) => {
  return(
    <div>
      <button type="button" className="accountButton">SIGN UP</button>
      <button type="button" className="accountButton" onMouseDown={props.login.bind(this)}>LOG IN</button>
    </div>
  );
}
