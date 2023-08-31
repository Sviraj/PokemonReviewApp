import React from "react";
import { Formik } from "formik";
import { Box, Container, TextField, Typography, Link } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleDirect = () => {
    navigate("/registration");
  };
  async function login(values) {
    let model = {
      name: values.email,
      password: values.password,
    };
    const response = await axios.post(
      `https://localhost:7209/api/User/Login`,
      model
    );
    console.log("response", response);
    if (response.status == 200) {
        navigate('/loader');
    } 
    else {
        alert.errors("Invalid Password");
    }
  }
  return (
    <Box>
      <Container>
        <div>
          <Typography variant="body2" sx={{ mb: 5 }}>
            Don’t have an account? {""}
            <Link variant="subtitle2" onClick={handleDirect}>
              Get started
            </Link>
          </Typography>
        </div>
        <div>
          <h1>Login Page</h1>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={login}
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
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="Username"
                  margin="normal"
                  variant="outlined"
                />
                {errors.email && touched.email && errors.email}
                <TextField
                  fullWidth
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  label="Password"
                  margin="normal"
                  variant="outlined"
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                  Sign In
                </button>
              </form>
            )}
          </Formik>
        </div>
      </Container>
    </Box>
  );
};

export default Login;
