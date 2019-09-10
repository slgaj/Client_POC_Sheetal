import React from 'react';
import { post } from 'axios';
import InputField from '../../Component/InputField/InputField';
import Label from '../../Component/Label/Label';
import Button from '../../Component/Button/Button';
import "./Styles.scss";

class AddNewContainer extends React.Component {
  constructor (props) {      
    super(props);
    this.state= {
        uname:'',
        sal:'',
        age:'',
        profile:''
    }
    this.handleSubmit =this.handleSubmit.bind(this)
  }

 async  handleSubmit (e) {
    e.preventDefault();  
    const { name,sal,age,pro}= this.state;
    const id= this.generateID();
    await post('http://dummy.restapiexample.com/api/v1/create', {
        "id":id,
        "employee_name":name,
        "employee_salary":sal,
        "employee_age":age,
        "profile_image":pro
    });
  }

  generateID (){
	 
    this.length = 8;
    this.timestamp = +new Date;
    
    var _getRandomInt = function( min, max ) {
       return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
    
    this.generate = function() {
        var ts = this.timestamp.toString();
        var parts = ts.split( "" ).reverse();
        var id = "";
        
        for( var i = 0; i < this.length; ++i ) {
           var index = _getRandomInt( 0, parts.length - 1 );
           id += parts[index];	 
        }
        
        return id;
    }
}

  render() { 

    return (    
        <div className="addForm">
        <h4>Add New Form</h4>
        <form className="m30Top"  onSubmit = {this.handleSubmit} >
        <input  type="hidden" value="something"/>
            <div  className="form-group">
                <Label for="" val="Name"/>
                <InputField pr="email" onChangeVal= {(name) => this.setState({uname: name}) } className="form-control" name="Name" type="text" desc="Enter your email" />
            </div>
            <div className="form-group">
                <Label for="" val="Salary"/>            
                <InputField pr="new-password" onChangeVal ={(name) => this.setState({sal:name}) } className="form-control" name="salary" type="text" desc="Enter your password" />     
            </div> 
            <div  className="form-group">
                <Label for="" val="Age"/>
                <InputField pr="email" onChangeVal= {(name) => this.setState({age:name}) } className="form-control" name="age" type="text" desc="Enter your email" />
            </div>
            <div className="form-group">
                <Label for="" val="Profile"/>            
                <InputField pr="new-password" onChangeVal ={(name) => this.setState({profile:name}) } className="form-control" name="profile" type="text" desc="Enter your password" />     
            </div>                         
                <Button class="btn-submit" type="submit"  value="Add New"/>  
                <Button class="btn-submit m10Left" type=""  value="Cancel"/>       
        </form>
        </div>   
       
    );
  }
}

export default AddNewContainer;
