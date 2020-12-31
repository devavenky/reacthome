import React ,{ useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MainContent } from './MainContent';
import './SideMenu.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
    color: 'grey',
  },
  bigAvatar: {
    margin: 30,
    width: 70,
    height: 70,
  },
}));

function SideMenu() {
  const classes = useStyles();
  const [sideview, setSideview] = useState(false)

  const showSideview =() =>setSideview(!sideview)

  return (
    <div className='sidebar'>
      <Link to="#" className='menu-bars'>
          <FaIcons.FaBars />
      </Link>
    {/* </div> */}
    <Drawer
      open={true}
      variant='permanent'
      anchor='left'
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}>
      <Grid container justify='center' alignItems='center'>
        <Avatar
          src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
          className={classes.bigAvatar}
        />
      </Grid>
      <List>
        {['Profile', 'Sign Out'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AccountCircleIcon /> : <ExitToApp />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
   
    <nav className={sideview ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items'>
        {/* <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose />     
          </Link>
        </li> */}
        {MainContent.map((item,index) =>{
          return(
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </Drawer>
  </div>
        
  );
}

export default SideMenu;
