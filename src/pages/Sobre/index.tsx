import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import imagem1 from 'assets/logo_amor.png';
import './Sobre.module.scss';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { darkModeState } from 'atom';
import { useRecoilValue } from 'recoil';

export default function Sobre() {

  const darkMode = useRecoilValue(darkModeState);


  return (
    <Grid>


      <Paper elevation={20} sx={{
        height: '100%', width: '90%', marginLeft: '5%', marginBottom: '2%', borderRadius: '10px', border: 2,
        borderColor: darkMode ? '#7eaaed' : '#03001e',
        backgroundColor: darkMode ? '#011e4d' : 'white'
      }}>



        <Grid style={{

        }} container spacing={3} direction="column">

          <Grid style={{
            margin: 30
          }} item >
            <Typography
              sx={{

                fontSize: {
                  lg: 30,
                  md: 25,
                  sm: 15,
                  xs: 10
                },
                color: darkMode ? '#EEEEEE' : '#03001e'


              }}>

              I am a Physics student who discovered a passion for programming.
              I have had exposure to languages such as C++ and Python during my undergraduate studies,
              explored C# as a hobby in the Unity Engine, and now I am immersed in languages like TypeScript, JavaScript,
              among others.
            </Typography>

          </Grid>


        </Grid>



      </Paper>
      <Paper elevation={20} sx={{
        height: '100%', width: '90%', marginLeft: '5%', borderRadius: '10px', border: 2,
        borderColor: darkMode ? '#7eaaed' : '#03001e',
        backgroundColor: darkMode ? '#011e4d' : 'white'
      }}>

        <Grid style={{

        }} container spacing={3} direction="column">

          <Grid style={{
            margin: 30
          }} item >
            


          </Grid>

          <Grid style={{
            margin: 30,
            marginTop:-50
          }} item >
            <Typography
              sx={{
                fontSize: {
                  lg: 30,
                  md: 25,
                  sm: 15,
                  xs: 10
                },
                color: darkMode ? '#EEEEEE' : '#03001e'

              }}>
              Currently, I am seeking a career transition into programming and the opportunity to contribute to my professional development.
              Although I do not yet possess a higher education degree in the field, I am committed to seeking knowledge and continuous
              improvement. I plan to enroll in a higher education or technology course to strengthen my
              educational foundation and deepen my understanding of the challenges and opportunities inherent in this dynamic industry.
              I have knowledge in languages such as TypeScript, JavaScript, C++, and Python.
              I aim to further specialize in the first two and develop my skills in them.
              I believe I have the capability to perform well in the position, along with the determination to achieve goals and
              meet objectives. I am committed to balancing my professional responsibilities with academic studies,
              striving for a harmonious approach to succeed both in the workplace
              and in my ongoing pursuit of knowledge and expertise in programming.

            </Typography>

            <Typography>
              <Button download="Curriculo" href={require('./Curriculo.pdf')} >
                <PictureAsPdfIcon style={{ fontSize: '175%' }} sx={{ color: darkMode ? '#90afe0' : '#03001e', display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', } }} />
                <PictureAsPdfIcon style={{ fontSize: '150%%' }} sx={{ color: darkMode ? '#90afe0' : '#03001e', display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', } }} />
                <PictureAsPdfIcon style={{ fontSize: '125%' }} sx={{ color: darkMode ? '#90afe0' : '#03001e', display: { xs: 'none', sm: 'block', md: 'none', lg: 'none', } }} />
                <PictureAsPdfIcon style={{ fontSize: '100%' }} sx={{ color: darkMode ? '#90afe0' : '#03001e', display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', } }} />
                <Typography
                  sx={{

                    fontSize: {
                      lg: 30,
                      md: 25,
                      sm: 15,
                      xs: 15
                    },
                    color: darkMode ? '#90afe0' : '#03001e'
                  }}>

                  Download CV

                </Typography>

              </Button>
            </Typography>
          </Grid>

        </Grid>



      </Paper>





    </Grid>


  );
}