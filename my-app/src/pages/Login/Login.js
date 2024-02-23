import React from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import { Formik } from "formik";
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
      navigate("/loader");
    } else {
      alert.errors("Invalid Password");
    }
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <Box>
          <Container>
            <Card
              sx={{
                display: "flex",
                position: "relative",
                top: "250px",
                maxWidth: 500,
                left: "150px",
                boxShadowColor: "rgba(0, 0, 0, 0.5)",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, )",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "2px 2px 5px rgba(0, 0, 0, 25)",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww"
                    alt="Description of the image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </CardContent>
              </Box>
            </Card>
          </Container>
        </Box>
      </div>
      <div style={{ flex: 1 }}>
        <Box>
          <Container>
            <Card
              sx={{
                display: "flex",
                position: "relative",
                top: "250px",
                maxWidth: 500,
                left: "150px",
                boxShadowColor: "rgba(0, 0, 0, 0.5)",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, )",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "2px 2px 5px rgba(0, 0, 0, 25)",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <div>
                    <Typography variant="body2" sx={{ mb: 5 }}>
                      Don’t have an account? {""}
                      <Link variant="subtitle2" onClick={handleDirect}>
                        Get started
                      </Link>
                    </Typography>
                  </div>
                  <h1>Login Page</h1>
                  <div>
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
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
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
                          {errors.password &&
                            touched.password &&
                            errors.password}
                          <button type="submit" disabled={isSubmitting}>
                            Sign In
                          </button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </CardContent>
              </Box>
            </Card>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default Login;
