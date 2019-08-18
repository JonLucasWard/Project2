import React from 'react';
import lambo from '../assets/lambo.jpg';
import Axios from 'axios';
import { Redirect } from 'react-router';

export default class Sign_Up extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state ={
          usercreated: false,
          firstname: '',
          lastname: '',
          email: '',
          phonenumber: '',
          driverlicense: '',
          username: '',
          password: '',
          role: 2
        }
      }

      updateValue(e: any) {
        this.setState({
         [e.target.name]: e.target.value
        });
    }

    async createUser(){
     
      console.log(new Date())

      //the headers with the key
    
      const headers= {
          'Content-Type' : 'application/json'

      }
          
      const body = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        phonenumber: this.state.phonenumber,
        driverlicense: this.state.driverlicense,
        username: this.state.username,
        password: this.state.password,
        role: this.state.role
 
      }

     const response = await Axios({
         method: "post",
         url: `http://localhost:8080/teame/register`,
         headers: headers,
         data: body})
     
          console.log(response.data)

          this.setState({
              ...this.state,
              firstname: response.data.firstname,
              lastname: response.data.lastname,
              email: response.data.lastname,
              phonenumber: response.data.phonenumber,
              driverlicense: response.data.driverlicense ,
              username: response.data.username,
              password: response.data.password,
              role: response.data.role
              
          })
  
           alert("User Created");   
           this.setState({
            usercreated: true
        });
              
  }

render(){
    return(

        <div>
          {this.state.usercreated ?

            <Redirect to = "/Home"/>: null

            }
           <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={lambo} />
          </div>
          <div className="form">
          <div className="form-group">
              
              <input type="text" name="firstname" placeholder="First Name"  onChange={(e) => this.updateValue(e)}/>
            </div>

            <div className="form-group">
             
              <input type="text" name="lastname" placeholder="Last Name"  onChange={(e) => this.updateValue(e)}/>
            </div>

            <div className="form-group">
              
              <input type="text" name="email" placeholder="email"  onChange={(e) => this.updateValue(e)}/>
            </div>

            <div className="form-group">
               
                <input type="text" name="phonenumber" placeholder="Phone #"  onChange={(e) => this.updateValue(e)}/>
              </div>

              <div className="form-group">
                
                <input type="text" name="driverlicense" placeholder="Driver License"  onChange={(e) => this.updateValue(e)}/>
              </div>

            <div className="form-group">
              
              <input type="text" name="username" placeholder="Username"  onChange={(e) => this.updateValue(e)}/>
            </div>
          
            <div className="form-group">
              
              <input type="text" name="password" placeholder="Password"  onChange={(e) => this.updateValue(e)}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn"onClick={() => this.createUser()}>
            Register
          </button>
        </div>
      </div>
        </div>
    )
}

}