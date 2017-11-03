import React from 'react';

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
    this.setState({username: value});
  }

  updatePassword(e){
    let value = e.target.value;
    this.setState({password: value});
  }

  undoLogin(){
    this.setState({loggingIn: false});
  }

  render(){
    return(
      <section className="body" style={{backgroundImage: "url('interior.jpg')"}}>
        <div className="image-description">
          {this.state.loggingIn ?
            <LoggingIn
              username={this.state.username}
              password={this.state.password}
              updateUsername={this.updateUsername.bind(this)}
              updatePassword={this.updatePassword.bind(this)}
              undoLogin={this.undoLogin.bind(this)}
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
      <input type="username" value={props.username} onChange={props.updateUsername} />
      <input type="password" value={props.password} onChange={props.updatePassword} /><br />
    <button type="button" className="accountButton">SUBMIT</button>
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
