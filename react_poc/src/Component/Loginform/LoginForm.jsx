import React from "react";
import Label from "../Label/Label";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import mydata from "../../assets/data/Login.json";
import { Redirect } from 'react-router';
import "./LoginForm.scss"



class  LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"",
            userpwd:"",
            loginStatus:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) { 
      e.preventDefault();
      

      for(let i in mydata.Users){
          if(this.state.username === mydata.Users[i].user && this.state.userpwd === mydata.Users[i].pwd ){
                this.setState({
                loginStatus:true,
                username:'',
                userpwd:''
                }) 
                
            }
            
            const { history } = this.props;
        if (this.state.loginStatus === true) {
          history.push("/dashboard")
           
          }
             
      }    
  

      
    }
    render() {
        
          
        
        return (
            <div>
                <form className="loginForm" onSubmit = {this.handleSubmit} >
                <input  type="hidden" value="something"/>
                    <div  className="form-group">
                        <Label for="email" val="Email"/>
                        <InputField pr="email" onChangeVal= {(name) => this.setState({username:name}) } className="form-control" name="email" type="text" desc="Enter your email" />
                    </div>
                    <div className="form-group">
                        <Label for="email" val="Password"/>            
                        <InputField pr="new-password" onChangeVal ={(name) => this.setState({userpwd:name}) } className="form-control" name="password" type="password" desc="Enter your password" />     
                    </div>                         
                        <Button class="btn-submit" type="submit"  value="Login"/>         
                </form>
            </div>
        );
    }
 
}

export default LoginForm;