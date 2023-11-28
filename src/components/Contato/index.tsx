import * as React from 'react';
import Grow from '@mui/material/Grow';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { darkModeState } from 'atom';
import { useRecoilValue } from 'recoil';




interface SimpleGrowProps {
  toggleDarkMode: boolean;
}

export default function SimpleGrow({ toggleDarkMode }: SimpleGrowProps) {

  const darkMode = useRecoilValue(darkModeState);
  const [fontSize, setFontSize] = React.useState(20);
  const [open, setOpen] = React.useState(false);
  const [checkedWhats, setCheckedWhats] = React.useState(false);
  const [checkedLinkedIn, setCheckedLinkedIn] = React.useState(false);
  const [checkedEmail, setCheckedEmail] = React.useState(false);
  const [contactlink, setContactLink] = React.useState('');
  const [contactlink2, setContactLink2] = React.useState('');
  const [contactlink3, setContactLink3] = React.useState('');

  const handleChange = () => {
    setOpen((prev) => !prev);
    setContactLink('');
    setContactLink2('');
    setContactLink3('');


  };
  const handleChangeWhats = () => {
    setCheckedWhats((prev) => !prev);
    setContactLink('+55 024 993244141');

  };
  const handleChangeLinkedIn = () => {
    setCheckedLinkedIn((prev) => !prev);
    setContactLink2('Visit my LinkedIn Profile');
  };
  const handleChangeEmail = () => {
    setCheckedEmail((prev) => !prev);
    setContactLink3('henriquedefreitasserra@hotmail.com');
  };


  const TextoClick = (
    <Typography style={{ textDecoration: 'none', color: darkMode ? '#0CC0DF' : '#03001e', }} >
      {contactlink}
    </Typography>
  );
  const TextoClick2 = (

    <Typography>


      <a style={{ fontSize: fontSize, textDecoration: 'underline', color: darkMode ? '#0CC0DF' : '#03001e' }} href="https://www.linkedin.com/in/henrique-de-freitas-serra-21130024b/" target="_blank" rel="noopener noreferrer">
        {contactlink2}
      </a>


    </Typography>

  );
  const TextoClick3 = (
    <Typography style={{
      textDecoration: 'none', color: darkMode ? '#0CC0DF' : '#03001e',
    }}>
      {contactlink3}
    </Typography>
  );

  const whatsicon = (

    <Button onClick={() => {
      handleChangeWhats();
      if (checkedLinkedIn === true) {
        handleChangeLinkedIn();
      }
      if (checkedEmail === true) {
        handleChangeEmail();
      }


    }} >

      <WhatsAppIcon style={{ fontSize: '175%' }} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', } }} />
      <WhatsAppIcon style={{ fontSize: '150%' }} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'none', } }} />
      <WhatsAppIcon style={{ fontSize: '125%' }} sx={{ display: { xs: 'none', sm: 'flex', md: 'none', lg: 'none', } }} />
      <WhatsAppIcon style={{ fontSize: '100%' }} sx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', } }} />

    </Button>



  );
  const linkicon = (
    <Button onClick={() => {
      handleChangeLinkedIn();
      if (checkedWhats === true) {
        handleChangeWhats();
      }
      if (checkedEmail === true) {
        handleChangeEmail();
      }


    }} >
      <LinkedInIcon style={{ fontSize: '175%' }} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', } }} />
      <LinkedInIcon style={{ fontSize: '150%' }} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'none', } }} />
      <LinkedInIcon style={{ fontSize: '125%' }} sx={{ display: { xs: 'none', sm: 'flex', md: 'none', lg: 'none', } }} />
      <LinkedInIcon style={{ fontSize: '100%' }} sx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', } }} />

    </Button>

  );
  const emailicon = (

    <Button onClick={() => {
      handleChangeEmail();
      if (checkedLinkedIn === true) {
        handleChangeLinkedIn();
      }
      if (checkedWhats === true) {
        handleChangeWhats();
      }
    }} >
      <EmailIcon style={{ fontSize: '175%' }} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', } }} />
      <EmailIcon style={{ fontSize: '150%' }} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'none', } }} />
      <EmailIcon style={{ fontSize: '125%' }} sx={{ display: { xs: 'none', sm: 'flex', md: 'none', lg: 'none', } }} />
      <EmailIcon style={{ fontSize: '100%' }} sx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', } }} />
    </Button>

  );

  React.useEffect(() => {
    if (open) {

      const timer = setTimeout(() => {
        setContactLink(checkedWhats ? '+55 024 993244141' : '');
        setContactLink2(checkedLinkedIn ? 'Visit my LinkedIn Profile' : '');
        setContactLink3(checkedEmail ? 'henriquedefreitasserra@hotmail.com' : '');
      }, 300);

      const isSmallScreen = window.matchMedia('(max-width: 600px)').matches;
      const isMediumScreen = window.matchMedia('(min-width: 601px) and (max-width: 960px)').matches;
      const isLargeScreen = window.matchMedia('(min-width: 961px)').matches;
      let newSize = 20;

      if (isSmallScreen) {
        newSize = 15;
      } else if (isMediumScreen) {
        newSize = 25;
      } else if (isLargeScreen) {
        newSize = 35;
      }
      if (newSize !== fontSize) {
        console.log(`Font size changed to ${newSize}`);
        setFontSize(newSize);
      }

      return () => clearTimeout(timer);
    } else {

      setCheckedWhats(false);
      setCheckedLinkedIn(false);
      setCheckedEmail(false);

    }

  }, [open, checkedWhats, checkedLinkedIn, checkedEmail, darkMode]);



  return (
    <Grid style={{

      marginTop: '3%',
      display: 'flex', justifyContent: 'center',

    }} container direction="column">
      <Box style={{
        minWidth: '100%',
        maxWidth: '100%',
        display: 'flex', justifyContent: 'center'
      }} >
        <Button sx={{
          border: 2,
          borderRadius: '5px',

          borderColor: darkMode ? '#7eaaed' : '#164863'
        }} onClick={handleChange}>
          <Typography noWrap sx={{

            fontSize: {
              lg: 30,
              md: 25,
              sm: 20,
              xs: 15
            },


          }} color={darkMode ? '#EEEEEE' : '#03001e'}>
            Contact Me
          </Typography>
        </Button>



      </Box>


      <Box style={{
        minWidth: '100%',
        maxWidth: '100%',
        display: 'flex', justifyContent: 'center'
      }} >
        <Grow style={{ color: darkMode ? '#0CC0DF' : '#03001e', transformOrigin: '0 0 0' }}
          in={open}>{whatsicon}</Grow>
        <Grow in={open} style={{ color: darkMode ? '#0CC0DF' : '#03001e', transformOrigin: '0 0 0' }} {...(open ? { timeout: 1500 } : {})}>
          {linkicon}
        </Grow>
        <Grow in={open} style={{ color: darkMode ? '#0CC0DF' : '#03001e', transformOrigin: '0 0 0' }} {...(open ? { timeout: 3000 } : {})}>
          {emailicon}
        </Grow>
      </Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: 'table', }}
        style={{
          minWidth: '85%',
          maxWidth: '100%',
          display: 'flex', justifyContent: 'center'
        }}

      >
        <Grow
          style={{ fontSize: fontSize, color: darkMode ? '#0CC0DF' : '#03001e', transformOrigin: '0 0 0', }}
          {...(checkedWhats ? { timeout: 2500 } : {})}
          in={checkedWhats}

        >
          {TextoClick}
        </Grow>
        <Grow
          style={{ fontSize: fontSize, color: darkMode ? '#0CC0DF' : '#03001e', transformOrigin: '0 0 0' }}
          {...(checkedLinkedIn ? { timeout: 2500 } : {})}
          in={checkedLinkedIn}
        >
          {TextoClick2}
        </Grow>
        <Grow
          style={{ fontSize: fontSize, color: darkMode ? '#0CC0DF' : '#03001e', transformOrigin: '0 0 0' }}
          {...(checkedEmail ? { timeout: 2500 } : {})}
          in={checkedEmail}
        >
          {TextoClick3}
        </Grow>
      </Stack>

    </Grid>


  );
}







