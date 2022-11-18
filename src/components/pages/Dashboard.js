import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Content from '../Layout/Content';
import ListItems from '../Layout/ListItems';
import { mainListItems } from '../Layout/Slide';
import {ContentStyle1, ContentStyle2, ContentStyle3} from '../Layout/Content.element';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import Avatar from '@mui/material/Avatar';
import logo from '../assets/logo.jpg';
import { ImgStyleNormal, ImgStyleMin } from '../Layout/slide.element';
import Tile from '../Layout/Tile';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
    setImg(!img);
  };

  const [img, setImg] = React.useState(true);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }} >
        <AppBar position="absolute" open={open} >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="white"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="secondary" endIcon={<DeleteIcon/>} style={{backgroundColor: 'white'}}>
                Error
              </Button>
              <Button variant="outlined" color="success" startIcon={<SendIcon/>} style={{backgroundColor: 'white'}}>
                Success
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List component="nav">
            {
              img ? <ImgStyleNormal><Avatar src={logo} alt="AndreyRojin" sx={{ width: 100, height: 100, marginLeft: 8}} /><Tile>Andrey Rojin</Tile></ImgStyleNormal> : 
                <ImgStyleMin><Avatar src={logo} sx={{marginLeft: 1}}/></ImgStyleMin>
            }
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <div style={{padding:10}}>
            <Grid container spacing={2}>
              {/* Recent Content */}
              <Grid item xs={12} md={4} lg={4}>
                <ContentStyle1 >
                  <Content />
                </ContentStyle1>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <ContentStyle2 >
                  <Content />
                </ContentStyle2>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <ContentStyle3>
                  <Content />
                </ContentStyle3>
              </Grid>    
              {/* Recent Orders */}
              <Grid item xs={12} md={4} lg={4}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'}}>
                  <ListItems />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'}}>
                  <ListItems />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <ListItems />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}