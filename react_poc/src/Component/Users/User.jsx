import React from 'react';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import { get } from 'axios';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        users: []
        };
    }
    componentDidMount() {
        this.getUsers();
        console.log(this.state.users)
    }
    async getUsers() {
        const response = await get('http://dummy.restapiexample.com/api/v1/employees');
        
            
            this.setState({
                users: response.data
            });
           
         
    }
    render() {
        const {users} = this.state;
        console.log(this.state.users)

        return (
            <div>
            <h1>Users</h1>
            <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Profile</Table.HeaderCell>
              
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map(user =>
              (<Table.Row key={user.id}>
                <Table.Cell>{user.employee_name}</Table.Cell>
                <Table.Cell>{user.employee_salary}</Table.Cell>
                <Table.Cell>{user.employee_age}</Table.Cell>
                <Table.Cell>{user.profile_image}</Table.Cell>
                
              </Table.Row>),
            )}
          </Table.Body>
          </Table>
          </div>
        );
    }
}
export default User;