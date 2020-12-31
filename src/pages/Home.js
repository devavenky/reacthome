import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />
      <Router>
        <SideMenu />
        <Switch>
          <Route path='/'/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default Home;
