import React from 'react';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import { get } from 'axios';

export default  function User (props) {    
        const {userDisplay} = props;   
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
                    {userDisplay.map(user =>
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
