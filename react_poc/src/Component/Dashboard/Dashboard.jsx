import React from 'react';
import {
    Route,
    NavLink,
    BrowserRouter
  } from "react-router-dom";
import Button from '../Button/Button';
import User from '../Users/User';
import AddNew from '../AddNew/AddNew';

class Dashboard  extends React.Component {
    render() {

        return (
            <BrowserRouter>
            <div class="d-inline-flex flex-row col-sm-12">
                <nav class="navbar col-sm-3 bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <NavLink to="/dashboard">Users</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to="/addnew">Add New User</NavLink>
                    </li>
                    <li class="nav-item">
                    <Button class="logout" />
                    </li>                
                </ul>
                </nav>
                <div class="col-sm-9"style={{
                    backgroundColor:'white',
                    height:'auto'
                }}>

            <Route path="/dashboard" component={User}/>
            <Route path="/addnew" component={AddNew}/>
                </div>
            </div>
            </BrowserRouter>

        );
    }
}
export default Dashboard