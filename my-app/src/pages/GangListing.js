import React, { useState, useEffect, createContext } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {TextField,InputLabel,Container,Grid, CardHeader, Divider, CardContent,Box,Card,Button,MenuItem,makeStyles,
TableContainer,Paper,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const screenCode = 'GANGREGISTRATION';
export default function GangListing() {
  const [gangData, setGangData] = useState([]);
  const [groups, setGroups] = useState();
  const [estates, setEstates] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [gangList, setGangList] = useState({
    groupID: '0',
    estateID: '0',
    divisionID: '0'
  })

  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      //const response = await axios.get('https://localhost:7209/api/Pokemon');
      const response = await axios.get('https://localhost:7209/api/Category/GetAllUsers');
      console.log('category response',response);
      setGangData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    const target = e.target;
    const value = target.value
    setGangList({
      ...gangList,
      [e.target.name]: value
    });
  }

  function cardTitle(titleName) {
    return (
      <Grid container spacing={1}>
        <Grid item md={10} xs={12}>
          {titleName}
        </Grid>
        <Grid item md={2} xs={12}>
        </Grid>
      </Grid>
    )
  }

  return (
      <Container maxWidth={false}>
        <Box mt={0}>
          <Card>
            <CardHeader
              title={cardTitle("Gangs")}
            />
            <PerfectScrollbar>
              <Divider />
              <CardContent style={{ marginBottom: "2rem" }}>
                <Grid container spacing={3}>
                          <Grid item md={4} xs={12}>
                              <InputLabel shrink id="groupID">  
                                Group  *
                              </InputLabel>
                              <TextField select
                                fullWidth
                                name="groupID"
                                onChange={(e) => handleChange(e)}
                                value={gangList.groupID}
                                variant="outlined"
                                size='small'
                              >
                                <MenuItem value="0">--Select Group--</MenuItem>
                              </TextField>
                          </Grid>

                           <Grid item md={4} xs={12}>
                              <InputLabel shrink id="estateID">
                                Estate *
                              </InputLabel>
                              <TextField select 
                                fullWidth 
                                name="estateID" 
                                size='small'
                                onChange={(e) => {
                                  handleChange(e)
                                }}
                                value={gangList.estateID}
                                variant="outlined"
                                id="estateID"
                              >
                                <MenuItem value={0}>--Select Estate--</MenuItem>
                              </TextField>
                          </Grid>
                          <Grid item md={4} xs={12}>
                              <InputLabel shrink id="divisionID">
                                Division * 
                              </InputLabel>
                              <TextField select 
                                fullWidth 
                                name="divisionID"
                                size='small' 
                                onChange={(e) => {
                                  handleChange(e)
                                }}
                                value={gangList.divisionID}
                                variant="outlined"
                                id="divisionID"
                              >
                                <MenuItem value={0}>--Select Division--</MenuItem>
                              </TextField>
                          </Grid> 
                </Grid>
              </CardContent>
              <Box minWidth={1050}> 
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Birth Date</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {gangData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.birthDate}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </Box>
            </PerfectScrollbar>
          </Card>
        </Box>
      </Container>
  );
};
