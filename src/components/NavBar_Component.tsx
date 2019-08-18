import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from '@material-ui/core';
import { getJwt } from '../helper/jwt';



const ITEM_HEIGHT = 48;
const jwt = getJwt();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MainAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function checkLogedIn(){
    const jwt = getJwt();
    if(!jwt) {
        
    }
  }

  function logout(){
    localStorage.removeItem('cool-jwt');
    window.location.reload();
   
}

  return (
    <div id="nav_bar_div" className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon>
            </MenuIcon>
              
          </IconButton>
          <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: 200,
                    },
                  }}
                >
          
                    <MenuItem  onClick={handleClose}>
                      <Button  href="/Home">Home</Button>
                    </MenuItem>
                    {jwt ?
                    <MenuItem  onClick={handleClose}>
                      <Button  href="#manager-actions">Manager Actions</Button>
                    </MenuItem>: null
                    }
                    {jwt ?
                    <MenuItem  onClick={handleClose}>
                      <Button  href="#manager-actions">Manager Actions</Button>
                    </MenuItem>:null
                    }
                
              </Menu>
              
             
          <Typography variant="h6" className={classes.title}>
          
          </Typography>
          {jwt ? <Button onClick={logout} href="#Home" color="inherit">Logout</Button>:<Button  href="#Login" color="inherit">Login</Button> } 
          
        </Toolbar>
      </AppBar>
    </div>
  );
}