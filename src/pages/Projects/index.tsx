import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { darkModeState } from 'atom';
import { useRecoilValue } from 'recoil';
import Error206 from 'assets/error206.png';
export default function Sobre() {

  const darkMode = useRecoilValue(darkModeState);


  return (
    <Box display="flex" flexDirection="column" >

      <Typography align="center" sx={{

        fontSize: {
          lg: 30,
          md: 25,
          sm: 15,
          xs: 15
        },
        color: darkMode ? '#90afe0' : '#03001e'
      }} >
        Sorry, this page is missing the projects that have not [started || finished] yet (Need intership :D)
      </Typography>
      <Grid>

        <Grid sx={{ ml: '-4%' }} item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <Box

            sx={{
              height: 233,
              width: 350,

              display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', justifyContent: 'center' }
            }}

          >

            <img src={Error206} width={450} height={450} />

          </Box>
          <Box

            sx={{
              height: 233,
              width: 350,

              display: { xs: 'none', sm: 'none', md: 'flex', lg: 'none', justifyContent: 'center' }
            }}

          >

            <img src={Error206} width={450} height={450} />
          </Box>
          <Box

            sx={{
              height: 233,
              width: 350,

              display: { xs: 'none', sm: 'flex', md: 'none', lg: 'none', justifyContent: 'center' }
            }}

          >

            <img src={Error206} width={450} height={450} />
          </Box>
          <Box

            sx={{
              height: 233,
              width: 350,

              display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', justifyContent: 'center' }
            }}

          >

            <img src={Error206} width={450} height={450} />

          </Box>



        </Grid>

      </Grid>


    </Box>












  );
}