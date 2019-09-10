import React from 'react';
import {
    Route,
    NavLink,
    BrowserRouter
  } from "react-router-dom";
import Button from '../Button/Button';

import UserContainer from '../../Container/UserContainer/UserContainer';
import AddNewContainer from '../../Container/AddNewContainer/AddNewContainer';
import "./Dashboard.scss";
import { FaUsers } from 'react-icons/fa';
import {IoIosLogIn , IoIosLogOut    }  from "react-icons/io";



class Dashboard  extends React.Component {
    render() {

        return (
            <BrowserRouter>
            <div class="d-inline-flex flex-row col-sm-12">
                <nav class="navSide navbar col-sm-3 bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        
                        <NavLink to="/dashboard"><FaUsers className="icon"/>Users</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/addnew">Add New User</NavLink>
                    </li>
                    <li class="nav-item">
                        <IoIosLogOut className="icon"/>
                        <Button class="btn-logout" value="Logout"/>
                    </li>                
                </ul>
                </nav>
                <div class="col-sm-9"style={{
                    backgroundColor:'white',
                    height:'800px'
                }}>

            <Route path="/dashboard" component={UserContainer}/>
            <Route path="/addnew" component={AddNewContainer}/>
                </div>
            </div>
            </BrowserRouter>

        );
    }
}
export default Dashboard