import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {

  const [inputarr, setInputarr] = useState([]);

  const [inputData, SetInputData] = useState({
    id:1,
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    mobileNumber: "",
  });

  function handleInputChange(e) {
    SetInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  }

  let { id,firstName, lastName, email, age, mobileNumber } = inputData;

   

  function changehandle(e) {
    e.preventDefault();

    setInputarr([
      ...inputarr,
      { id,firstName, lastName, email, age, mobileNumber},
    ])


    SetInputData({
      id:++id,
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      mobileNumber: '',
  });

    var response = axios.post(`http://localhost:31485/api/Students/SaveStudents`,{
      id,
      firstName,
      lastName,
      email,
      age,
      mobileNumber
    })
   .then(res=>console.log('Your message send successfully.'))
      .catch(err=>console.log('Your message send failed.'));
      
      console.log(inputData);
      console.log('response', response);

      if(response != null){
        console.log('Response Not Null.');
        toast("Your Responce Show Successfully");

      }
      else{
        console.log('Response is Null');
      }
       
    

   

  e.target.reset();
    
  }

  const columns = [
    { 
      field: "id", 
      headerName: "ID",
      type: "number", 
      width: 60 ,
    },
    {
      field: "firstName",
      headerName: "First name",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 180,
      editable: true,
    },

    {
      field: "age",
      headerName: "Age",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "mobileNumber",
      headerName: "Mobile Number",
      type: "string",
      width: 180,
      editable: true,
    },
  ];

 

  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        React App
      </Typography>

      <Card>
        <Typography gutterBottom variant="h4" align="center">
          Material table
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            Student Application Form
          </Typography>

          <form onSubmit={changehandle}>
            <Grid container spacing={1}>
              <Grid xs={18} sm={12} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  name="firstName"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid xs={18} sm={12} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="outlined"
                  name="lastName"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid xs={18} sm={12} item>
                <TextField
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  name="email"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid xs={18} sm={12} item>
                <TextField
                  type="number"
                  label="Age"
                  placeholder="Enter Age"
                  variant="outlined"
                  name="age"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid xs={18} sm={12} item>
                <TextField
                  type="number"
                  label="Mobile Number"
                  placeholder="Enter Mobile Number"
                  variant="outlined"
                  name="mobileNumber"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid xs={18} item>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <ToastContainer />
      </Card>

      <Box
        sx={{ height: 400, width: "82%", marginLeft: "19%", marginTop: "10%" }}
      >
        <DataGrid
          rows={inputarr}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
};

export default Home;
