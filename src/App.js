/**
 * component add new user
 * component liste view user
 * component view user
 */
import React, { useState } from 'react';
import style from './App.css';
import ListViewUsers from './ListViewUsers/ListViewUsers';
import ViewUser from './ViewUser/ViewUser';
import {Button,FormControl,FormLabel,TextField,Grid,Input} from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let listUser = [
    {
      firstName:"mouhamed ali",
      lastName:"derouich",
      phone:"20147465",
      country:"Tunis",
      email:"med@gmail.fr",
      image:"https://assets-fr.imgfoot.com/media/cache/1200x675/cristiano-ronaldo-al-nassr.jpg"
    },
    {
      firstName:"mouhamed ali",
      lastName:"derouich",
      phone:"20147465",
      country:"Tunis",
      email:"med@gmail.fr",
      image:"https://assets-fr.imgfoot.com/media/cache/1200x675/cristiano-ronaldo-al-nassr.jpg"
    },
    {
      firstName:"mouhamed ali",
      lastName:"derouich",
      phone:"20147465",
      country:"Tunis",
      email:"med@gmail.fr",
      image:"https://assets-fr.imgfoot.com/media/cache/1200x675/cristiano-ronaldo-al-nassr.jpg"
    },
    {
      firstName:"mouhamed ali",
      lastName:"derouich",
      phone:"20147465",
      country:"Tunis",
      email:"med@gmail.fr",
      image:"https://assets-fr.imgfoot.com/media/cache/1200x675/cristiano-ronaldo-al-nassr.jpg"
    },
    {
      firstName:"mouhamed ali",
      lastName:"derouich",
      phone:"20147465",
      country:"Tunis",
      email:"med@gmail.fr",
      image:"https://assets-fr.imgfoot.com/media/cache/1200x675/cristiano-ronaldo-al-nassr.jpg"
    }
  ];
  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone:'',
    country:'',
    email:'',
    image:''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const addUser = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    /**
     * server call add user api
     */
    fetch(apiUrl+"/user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => response.json())
    .then(data => console.log('dshfgdhgfdfdfdf',data))
    .catch(error => console.error(error));
  }
  return (
    <div>
      <form onSubmit={addUser}>
        <Grid style={{marginBottom:'10px'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item  xs>
          <FormControl fullWidth>
              <FormLabel>First Name</FormLabel>
              <TextField 
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth></TextField>
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl fullWidth>
              <FormLabel>Last Name</FormLabel>
              <TextField 
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth></TextField>
          </FormControl>
        </Grid>
        </Grid>
        <Grid style={{marginBottom:'10px'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item  xs>
          <FormControl fullWidth>
              <FormLabel>Phone number</FormLabel>
              <TextField 
              fullWidth
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              ></TextField>
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl fullWidth>
              <FormLabel>Country name</FormLabel>
              <TextField 
              
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              fullWidth></TextField>
          </FormControl>
        </Grid>
        
        </Grid>
        <Grid style={{marginBottom:'10px'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs>
            <FormControl fullWidth>
                <FormLabel>Email</FormLabel>
                <TextField 
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth></TextField>
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth>
                <FormLabel>upload pecture</FormLabel>
                <Input
                  onChange={handleFileChange}
                  id="fileInput"
                  type="file"
                  fullWidth
                />
            </FormControl>
          </Grid>
        </Grid>
        <Grid justifyContent="end" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item>
          <Button type="submit" variant="contained">Create new user</Button>
          </Grid>
        </Grid>
      </form>
      <hr/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListViewUsers users={listUser}/>}/>
        <Route path="/view" element={<ViewUser />}/>

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
