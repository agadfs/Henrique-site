import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, LinearProgress, Stack, Typography } from '@mui/material';


const labels: { [index: string]: string } = {
  10: 'Student          ',
  20: 'Student+         ',
  30: 'Junior           ',
  40: 'Junior+          ',
  50: 'Junior to Senior ',
  60: 'Junior to Senior+',
  70: 'Senior           ',
  80: 'Senior+          ',
  90: 'Expert           ',
  100: 'Expert+         ',
};



export default function TextRating({ valuenovo }: { valuenovo: number }) {
  const value = valuenovo;

  return (



    <Grid container spacing={2} columns={16} sx={{ mt: 2, flexGrow: 1 }} >

      <Grid xs={8} sx={{ }} >
        <Box
          sx={{
            width: 100,
            display: 'column',
            alignItems: 'center',
          }}
        >

          <Typography sx={{
            fontSize: 30, display: 'flex',
            alignItems: 'center',
          }} variant="h6" gutterBottom>
            {labels[value]}

          </Typography>
          <LinearProgress
            sx={{
              backgroundColor: '#011e4d',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#90afe0'
              },
              width:'200%',
              

            }}
            variant="determinate"
            value={value}


          />
        </Box>
      </Grid>


    </Grid>

  );
}