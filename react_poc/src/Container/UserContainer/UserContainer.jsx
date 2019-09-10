import React from 'react';
import { get } from 'axios';
import User from '../../Component/Users/User';

class UserContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        users: []
        };
    }
    componentDidMount() {
        this.getUsers();       
    }
    async getUsers() {
        const response = await get('http://dummy.restapiexample.com/api/v1/employees');        
        this.setState({
            users: response.data
        });      
    }
    render() {
        const {users} = this.state;
        console.log(users);
        return (
            <User userDisplay={users}/>
        );
    }
}

export default UserContainer;