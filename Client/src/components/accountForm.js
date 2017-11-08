import React from 'react';
import axios from 'axios';

const host = "http://localhost:8080/lifeblogServer/";

export default class AccountForm extends React.Component{

  constructor(){
    super();
    this.state = {
      prompt: 'guest',
      loggingIn: false,
      signingUp: false,
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      confirm: ''
    }
  }

  login(){
    this.setState({loggingIn: true});
  }

  signup(){
    this.setState({signingUp: true});
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

  updateEmail(e){
    let value = e.target.value;
    if(value.length > 80) return;
    this.setState({email: value});
  }

  updateConfirm(e){
    let value = e.target.value;
    this.setState({confirm: value});
  }

  updateFirstname(e){
    let value = e.target.value;
    if(value.length > 30) return;
    this.setState({firstname: value});
  }

  updateLastname(e){
    let value = e.target.value;
    if(value.length > 30) return;
    this.setState({lastname: value});
  }

  undoLogin(){
    this.setState({
      loggingIn: false,
      username: '',
      password: ''
    });
  }

  undoSignup(){
    this.setState({signingUp:false,username:'',password:'',firstname:'',
    lastname:'',confirm:'',email:''});
  }

  submitLogin(){
    axios.post(host+"login?username="+this.state.username+"&password="+this.state.password)
      .then((response) => {
        this.props.token(response.data);
      });
  }

  createUser(){
    if(this.state.password !== this.state.confirm){
      alert("Passwords do not match!");
      return;
    }
    if(this.state.password.length < 4){
      alert("Password must be 4+ characters!");
      return;
    }
    if(this.state.username.length < 4){
      alert("Username must be 4+ characters!");
      return;
    }
    if(this.state.firstname.length < 1){
      alert("You have a first name, don't you?");
      return;
    }
    if(this.state.lastname.length < 1){
      alert("You have a last name, don't you?");
      return;
    }
    let user = {
      id: null,
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      website: null,
      password: this.state.password,
      enabled: 1,
      roles: null
    };
    axios.post(host+"createUser", user)
      .then((response) => {
        this.props.updateToken(response.data);
      });
  }

  getComponent = () => {
    if(this.state.loggingIn){
      return <LoggingIn
        username={this.state.username}
        password={this.state.password}
        updateUsername={this.updateUsername.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        undoLogin={this.undoLogin.bind(this)}
        loginUser={this.submitLogin.bind(this)}
      />;
    }else if(this.state.signingUp){
      return <SigningUp username={this.state.username} password={this.state.password}
      confirm={this.state.confirm} firstname={this.state.firstname} lastname={this.state.lastname}
      email={this.state.email} createUser={this.createUser.bind(this)} undoSignup={this.undoSignup.bind(this)}
      updateUsername={this.updateUsername.bind(this)}
      updatePassword={this.updatePassword.bind(this)}
      updateFirstname={this.updateFirstname.bind(this)}
      updateLastname={this.updateLastname.bind(this)}
      updateEmail={this.updateEmail.bind(this)}
      updateConfirm={this.updateConfirm.bind(this)}/>;
    }else{
      return <GetButtons login={this.login.bind(this)} signup={this.signup.bind(this)} />;
    }
  };

  render(){
    return(
      <section className="body" style={{backgroundImage: "url('fashion.jpg')"}}>
        <div className="image-description">
          {this.getComponent()}
        </div>
      </section>
    );
  }
}

const LoggingIn = (props) => {
  return(
    <div className="form-block">
      <div className="login-list">
        <input type="username" className="accountInput" placeholder="Username"
          value={props.username} onChange={props.updateUsername} />
        <input type="password" className="accountInput"  placeholder="Password"
          value={props.password} onChange={props.updatePassword} />
      </div>
      <button type="button" className="accountButton" onMouseDown={props.loginUser}>SUBMIT</button>
      <button type="button" className="accountButton" onMouseDown={props.undoLogin}>GO BACK</button>
    </div>
  );
}

const SigningUp = (props) => {
  return(
    <div className="form-block">
      <div className="signup-list">
        <input type="username" className="accountInput" placeholder="*Username"
          value={props.username} onChange={props.updateUsername} />
        <input type="password" className="accountInput" placeholder="*Password"
          value={props.password} onChange={props.updatePassword} />
        <input type="password" className="accountInput" placeholder="*Confirm Password"
          value={props.confirm} onChange={props.updateConfirm} />
        <input type="text" className="accountInput" placeholder="*First Name"
          value={props.firstname} onChange={props.updateFirstname} />
        <input type="text" className="accountInput" placeholder="*Last Name"
          value={props.lastname} onChange={props.updateLastname} />
        <input type="email" className="accountInput" placeholder="E-Mail Address"
          value={props.email} onChange={props.updateEmail} />
      </div>
      <button type="button" className="accountButton" onMouseDown={props.createUser}>SUBMIT</button>
      <button type="button" className="accountButton" onMouseDown={props.undoSignup}>GO BACK</button>
    </div>
  );
}

const GetButtons = (props) => {
  return(
    <div>
      <button type="button" className="accountButton" onMouseDown={props.signup.bind(this)}>SIGN UP</button>
      <button type="button" className="accountButton" onMouseDown={props.login.bind(this)}>LOG IN</button>
    </div>
  );
}
