import React from 'react';
import lambo from '../assets/lambo.jpg';
import Axios from 'axios';
import { Redirect } from 'react-router';

export default class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
          username: '',
          password: '',
          shouldRedirect: false
      };  

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
      }

      
// CHANGE IS BEING CALLED WITHIN THE TWO INPUT FIELDS
// USERNAME AND PASSPORT
    change(e:any){
      this.setState({
          [e.target.name]: e.target.value
      });
  }

// CALLING MY API TO CREATE THE TOKEN
// THIS FUNCTION WILL BE CALLED ON THE LOGIN BUTTON ONCLICK EVENT LISTENER
  submit(e: any){
      e.preventDefault();
      Axios.post('http://localhost:8080/authenticate', {
          username: this.state.username,
          password: this.state.password
      }).then(res =>  {
          localStorage.setItem('cool-jwt', res.data.token)
          this.setState({
            shouldRedirect: true
        });
        window.location.reload();
      }).catch(() => {
          alert("Incorrect User Name Or Password");
      })
      
  }

render(){

    return(

    <div className="Main_login_div">
      {this.state.shouldRedirect ?

      <Redirect to = "/Home"/>: null

      }
      <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
            <div className="content">
              <div className="image">
                <img src={lambo} />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="username" onChange={e => this.change(e)} value={this.state.username}/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="password" onChange={e => this.change(e)} value={this.state.password}/>
                </div>
              </div>
            </div>
            <div className="footer">
              <button type="button" className="btn" onClick ={e => this.submit(e)}>
                Login
              </button>
        </div>
      </div>
    </div>
    )
}

}