import React, {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FormControlLabel, GlobalStyles, Link, Switch, ThemeProvider, createTheme } from '@mui/material';
import styled from './Menu.module.scss';
import Logo from 'assets/logo_amor.png';
import { darkModeState } from 'atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';



function ResponsiveAppBar() {

  const darkMode = useRecoilValue(darkModeState);
  const setDarkMode = useSetRecoilState(darkModeState);

  // Save the dark mode preference to localStorage on state change
  useEffect(() => {
    localStorage.setItem('darkModePreference', JSON.stringify(darkMode));
  }, [darkMode]);

  const pages = [
    'About me',
    'Projects',
    'Skills'
  ];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };




  const THEME = createTheme({
    typography: {
      'fontFamily': '"Outfit"',
      'fontSize': 14,
      'fontWeightLight': 300,
      'fontWeightRegular': 400,
      'fontWeightMedium': 500
    },
  });




  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: darkMode ? '#000d21' : '#EEEEEE',
            color: darkMode ? '#EEEEEE' : '#03001e'
          },
        }}
      />
      <AppBar position="static" sx={{
        backgroundColor: darkMode ? '#011e4d' : '#427D9D',
        color: darkMode ? '#EEEEEE' : '#03001e',

      }} >
        <Container maxWidth="xl">
          <Toolbar disableGutters className={styled.menu} >
            <Typography
              variant="h6"
              noWrap
              component="a"

              sx={{
                mr: 4,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                color: darkMode ? '#EEEEEE' : '#03001e'
              }}
            >
              HENRIQUE SERRA
            </Typography>
            <img src={Logo}
              style={{

                textAlign: 'center',
                maxWidth: '10%',
                maxHeight: '20%'
              }

              }

              alt="logo" />
            <Box sx={{ ml: 5 }} />

            <Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{

                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '50%'
                }}
              >
                HENRIQUE SERRA
              </Typography>

            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="site"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />

              </IconButton>
              <Menu

                PaperProps={{
                  sx: {
                    backgroundColor: darkMode ? '#03001e' : '#b0ceff',
                    color: darkMode ? '#EEEEEE' : '#03001e',

                  },
                }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  color: darkMode ? '#EEEEEE' : '#03001e',


                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>

                    <Typography
                      sx={{ fontSize: 36, my: 2, color: darkMode ? '#EEEEEE' : '#03001e', display: 'block' }}
                    >

                      <Link sx={{ fontSize: 36, my: 2, color: darkMode ? '#EEEEEE' : '#03001e', display: 'block' }}
                        underline="none" href={page}>{page}</Link>

                    </Typography>
                  </MenuItem>
                ))}
                <Box sx={{
                  flexGrow: 1, display: { xs: 'flex', md: 'none' },
                  backgroundColor: darkMode ? '#03001e' : '#164863'
                }}>
                  <Tooltip title="Switch Dark/Light Mode" sx={{ backgroundColor: darkMode ? '#03001e' : '#b0ceff' }} >
                    <FormControlLabel
                      control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
                      label={<Typography sx={{ fontSize: 36, my: 2, color: darkMode ? '#EEEEEE' : '#03001e', display: 'block' }}>
                        {darkMode ? 'Dark Mode' : 'Light Mode'}
                      </Typography>}
                    />

                  </Tooltip>
                </Box>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ mr: 2, color: darkMode ? '#EEEEEE' : 'black', display: 'block' }}
                  href={page}
                >

                  <Link sx={{ fontSize: 22, my: 2, color: darkMode ? '#EEEEEE' : '#03001e', display: 'block' }}
                    underline="none" >{page}</Link>
                </Button>
              ))}
            </Box>
            <Box sx={{ marginLeft: 30, flexGrow: 1, display: { xs: 'none', md: 'flex' }, backgroundColor: darkMode ? '#011e4d' : '#427D9D' }}>
              <Tooltip title="Switch Dark/Light Mode" sx={{ backgroundColor: darkMode ? '#03001e' : '#b0ceff' }} >
                <FormControlLabel
                  control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
                  label={<Typography sx={{ mr: -30, fontSize: 24, color: darkMode ? '#EEEEEE' : '#03001e', display: 'block' }}>
                    {darkMode ? 'Dark Mode' : 'Light Mode'}
                  </Typography>}
                />
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider >
  );
}
export default ResponsiveAppBar;