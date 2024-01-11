import {Button,Grid,Link as myLink} from '@mui/material';
import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import style from './ViewUser.css';

function ViewUser() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [user, setUser] = useState({});
    const userId = queryParams.get('id');
    const apiUrl = process.env.REACT_APP_BACKEND_URL;
    useEffect(() => {
        fetch(apiUrl+"/user?id="+userId)
        .then(response => response.json())
        .then(data => setUser(data.user))
        .catch(error => console.error(error));
    },[]);
    
    return (
        <div>
        <Grid justifyContent="flex-start" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={5} >
            <img src={user.image} className='userImage'/>
        </Grid>
        <Grid item xs >
            <table>
                <tr>
                    <td>
                        <strong>First name:</strong>
                    </td>
                    <td>
                        {user.firstName}
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Last name:</strong>
                    </td>
                    <td>
                        {user.lastName}
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Email:</strong>
                    </td>
                    <td>
                        {user.email}
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Country:</strong>
                    </td>
                    <td>
                        {user.country}
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Phone:</strong>
                    </td>
                    <td>
                        {user.phone}
                    </td>
                </tr>
            </table>
        </Grid>
    </Grid>
    </div>
       
    )
}
export default ViewUser;