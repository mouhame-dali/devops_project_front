import {Button,Grid} from '@mui/material';
import style from './ListViewUser.css';
import { Outlet, Link } from "react-router-dom";
import React, { useState,useEffect } from 'react';

function ListViewUsers(props){
  const listUser = props.users;
  const [users, setUsers] = useState([]);
  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    fetch(apiUrl+"/users")
    .then(response => response.json())
    .then(data => setUsers(data.users))
    .catch(error => console.error(error));
  },[]);
    return (
        <Grid justifyContent="center" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {users.map((item, index) => (
                <Grid item xs={3} className='userItem'>
                    <img src={item.image}/>
                    <strong>
                        {item.firstName}
                    </strong>
                    <br/>
                    <strong>
                        {item.lastName}
                    </strong>
                    <br/>
                    <Link to={`/view?id=${item.id}`}>
                        <Button variant="outlined" style={{ width: '100%' }}>
                            view more
                        </Button>
                    </Link>

                </Grid>
            ))}
        </Grid>
    )
}
export default ListViewUsers;