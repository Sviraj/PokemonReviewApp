import React,{useState, Fragment} from "react";
import { Formik } from 'formik';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {TextField,InputLabel,Container,Grid, CardHeader, Divider, CardContent,Box,Card,Button} from '@mui/material';
import axios from "axios";

export default function GangAddEdit(){
  const [title,setTitle] = useState("Gang Registration");
  const [groups,setGroups] = useState();
  const [gang, setGang] = useState({
    gangName: '',
    gangCode: '',
    gangMail: '',
    gangPassword: '',
    gangType: '',
    gangLocation: '',
  });

  async function saveGang(values){
    let saveModel = {
      gangName: values.gangName,
      gangCode: values.gangCode,
      gangMail: values.gangMail,
      gangPassword: values.gangPassword,
      gangType: values.gangType,
      gangLocation: values.gangLocation,
    }
    console.log('saveModel',saveModel);

    var response = axios.post(`http://localhost:31485/api/Students/SaveGang`,{
      
    });
    console.log('gangResponce', response);
  }

  function handleChange1(e){
    const target = e.target;
    const value = target.value;
    setGang({
      ...gang,
      [e.target.name]: value
    });
  }

    return(
        <Fragment>
          <Container maxWidth={false}>
            <Formik
                initialValues={{ 
                  gangName: gang.gangName,
                  gangMail: gang.gangMail,
                  gangPassword: gang.gangPassword,
                  gangCode: gang.gangCode,
                  gangType: gang.gangType,
                  gangLocation: gang.gangLocation,
                }}
                validate={values => {
                  // const errors = {};
                  // if (!values.email) {
                  //   errors.email = 'Required';
                  // } else if (
                  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  // ) {
                  //   errors.email = 'Invalid email address';
                  // }
                  // return errors;
                }}
                onSubmit={saveGang}
                enableReinitialize
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box>
                      <Card>
                        <CardHeader
                        title={title}
                        />
                        <PerfectScrollbar>
                          <Divider/>
                            <CardContent>
                              <Grid container spacing={3}>
                                <Grid item xs={4}>
                                  <InputLabel>
                                    Gang Name
                                  </InputLabel>
                                  <TextField
                                    fullWidth
                                    name="gangName"
                                    onBlur={handleBlur}
                                    onChange={(e) => handleChange1(e)}
                                    value={values.gangName}
                                    size="small"
                                    variant="outlined"
                                  /> 
                                </Grid>
                                <Grid item xs={4}>
                                  <InputLabel>
                                    Gang Mail
                                  </InputLabel>
                                  <TextField
                                    fullWidth
                                    name="gangMail"
                                    onChange={(e) => handleChange1(e)}
                                    size="small"
                                    onBlur={handleBlur}
                                    value={values.gangMail}
                                  />
                                  {errors.email && touched.email && errors.email}
                                </Grid>
                                <Grid item xs={4}>
                                  <InputLabel>
                                    Gang Password
                                  </InputLabel>
                                  <TextField
                                    fullWidth
                                    //type="password"
                                    name="gangPassword"
                                    onChange={(e) => handleChange1(e)}
                                    size="small"
                                    onBlur={handleBlur}
                                    value={values.gangPassword}
                                  />
                                {errors.password && touched.password && errors.password}
                                </Grid>
                              </Grid>

                              <Grid container spacing={3}>
                                <Grid item xs={4}>
                                  <InputLabel>
                                    Gang Code
                                  </InputLabel>
                                  <TextField
                                    fullWidth
                                    name="gangCode"
                                    onBlur={handleBlur}
                                    onChange={(e) => handleChange1(e)}
                                    value={values.gangCode}
                                    size="small"
                                    variant="outlined"
                                  /> 
                                </Grid>
                                <Grid item xs={4}>
                                  <InputLabel>
                                    Gang Type
                                  </InputLabel>
                                  <TextField
                                    fullWidth
                                    name="gangType"
                                    onChange={(e) => handleChange1(e)}
                                    size="small"
                                    onBlur={handleBlur}
                                    value={values.gangType}
                                  />
                                  {errors.email && touched.email && errors.email}
                                </Grid>
                                <Grid item xs={4}>
                                  <InputLabel>
                                    Gang Location
                                  </InputLabel>
                                  <TextField
                                    fullWidth
                                    name="gangLocation"
                                    onChange={(e) => handleChange1(e)}
                                    size="small"
                                    onBlur={handleBlur}
                                    value={values.gangLocation}
                                  />
                                {errors.password && touched.password && errors.password}
                                </Grid>
                              </Grid>
                            </CardContent>
                        </PerfectScrollbar>
                      </Card>
                    </Box>
                    <Box>
                      <Button type="submit" disabled={isSubmitting}>
                        Submit
                      </Button>
                    </Box> 
                  </form>
                )}
            </Formik>
          </Container>
        </Fragment>
    );
}