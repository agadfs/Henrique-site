import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextRating from 'components/Rating';
import { Box, Grid, Skeleton, TableHead, Typography } from '@mui/material';
import React from 'react';
import { darkModeState } from 'atom';
import { useRecoilValue } from 'recoil';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  linguagem: string,
  level: number,
  expertiseMes: number,
  Outros: string,

) {

  return {
    linguagem, level, expertiseMes, Outros,

  };
}
const rows = [
  createData('TypeScript', 40, 4, 'Alura'),
  createData('JavaScript', 20, 2, 'Alura'),
  createData('React.js', 30, 2, 'Alura'),
  createData('Next.js', 10, 1, 'Alura'),
  createData('Custom APIs', 30, 3, 'Alura'),
  
];



export default function CustomizedTables() {
  const darkMode = useRecoilValue(darkModeState);
  console.log('Dark Mode:', darkMode);
  return (

    <Grid style={{

      display: 'flex', justifyContent: 'center',

    }} container spacing={3} direction="column" >
      <Grid sx={{ display: 'flex', justifyContent: 'center' }} item>
        <Paper sx={{ height: '1%', width: '90%', borderRadius: '5px', border: 4, borderColor: darkMode ? '#7eaaed' : '#03001e' }} >
          <TableContainer sx={{
            border: 2,
            width: '100%', flexGrow: 1, display: { xs: 'none', md: 'flex' }
          }} >
            <Table >
              <TableHead  >
                <TableRow  >
                  <StyledTableCell align='center' sx={{}} style={{
                    backgroundColor: darkMode ? '#011e4d' : '#427D9D',
                    color: darkMode ? '#90afe0' : '#000000'
                  }} >Subject</StyledTableCell>
                  <StyledTableCell align='center' sx={{}} style={{
                    backgroundColor: darkMode ? '#011e4d' : '#427D9D',
                    color: darkMode ? '#90afe0' : '#000000'
                  }} >Level</StyledTableCell>
                  <StyledTableCell align='center' sx={{}} style={{
                    backgroundColor: darkMode ? '#011e4d' : '#427D9D',
                    color: darkMode ? '#90afe0' : '#000000'
                  }} >Time of usage(Months)</StyledTableCell>
                  <StyledTableCell align='center' sx={{}} style={{
                    backgroundColor: darkMode ? '#011e4d' : '#427D9D',
                    color: darkMode ? '#90afe0' : '#000000'
                  }} >Source of Learning</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.linguagem}>
                    <StyledTableCell sx={{}} align='center' style={{
                      backgroundColor: darkMode ? '#000d21' : '#DDF2FD',
                      color: darkMode ? '#EEEEEE' : '#000000',

                    }} component="th" scope="row">
                      <Typography variant="h5" gutterBottom>
                        {row.linguagem}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell sx={{}} style={{
                      backgroundColor: darkMode ? '#000d21' : '#DDF2FD',
                      color: darkMode ? '#EEEEEE' : '#000000',
                    }} align="center">
                      <TextRating valuenovo={row.level} />
                    </StyledTableCell>
                    <StyledTableCell sx={{}} style={{
                      backgroundColor: darkMode ? '#000d21' : '#DDF2FD',
                      color: darkMode ? '#EEEEEE' : '#000000',

                    }} align='center'  >
                      <Typography variant="h5" gutterBottom>
                        {row.expertiseMes}
                      </Typography>

                    </StyledTableCell>
                    <StyledTableCell sx={{}} align='center' style={{
                      backgroundColor: darkMode ? '#000d21' : '#DDF2FD',
                      color: darkMode ? '#EEEEEE' : '#000000',
                    }} >
                      <Typography variant="h5" gutterBottom>
                        {row.Outros}
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{
            display: { xs: 'flow', md: 'none' }, backgroundColor: darkMode ? '#011e4d' : '#427D9D',
            color: darkMode ? '#90afe0' : '#000000',
            border: 2,
          }}>
            <div className="lists-container">
              <h2>
                <Typography align='center' sx={{
                  fontWeight: 'bold', fontSize: 50,
                  color: darkMode ? 'white' : '#03001e'
                }} >
                  Skills
                </Typography>
              </h2>
              {rows.map((row, i) => (
                <div key={i}>
                  <Paper elevation={20} sx={{
                    height: '100%', width: '90%', marginLeft: '5%', borderRadius: '10px', border: 2,
                    backgroundColor: darkMode ? '#011e4d' : 'white'
                  }}>

                    <Grid sx={{
                      backgroundColor: darkMode ? '#011e4d' : '#DDF2FD',
                      color: darkMode ? '#EEEEEE' : '#000000', margin: '5%'
                    }} style={{

                    }} item >
                      <Typography align='center'
                        sx={{
                          marginTop: '-5%',
                          color: darkMode ? '#7eaaed' : '#000000',
                          backgroundColor: darkMode ? '#011e4d' : 'white'
                        }} >
                        {row.linguagem}
                      </Typography>

                      <Box sx={{
                        backgroundColor: darkMode ? '#000d21' : '#DDF2FD', border: 1

                      }} >
                        <Typography sx={{ marginLeft:'10%', marginBottom:'5%'
                        }}
                        >
                          <TextRating valuenovo={row.level} />
                        </Typography>




                      </Box>

                    </Grid>
                  </Paper>
                </div>
              ))}
            </div>
          </Box>
        </Paper>
      </Grid>
      <Grid>




      </Grid>
    </Grid>

  );
}