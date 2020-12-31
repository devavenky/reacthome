import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

// import { makeStyles } from '@material-ui/core/styles';
// import { Grid } from '@material-ui/core';
// import { Typography } from '@material-ui/core';
// import { Switch, Route, Link } from "react-router-dom";
// const useStyles = makeStyles(theme => ({
//   toolbar: theme.mixins.toolbar,
//   title: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3),
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   fullWidth: {
//     width: '100%',
//   },
// }));

// function MainContent() {
//   const classes = useStyles();

//   return (
//     <main className={classes.fullWidth}>
//      {/* <div className="tabs">
//   <Switch>
//     <Route path={`/home`} exact component={Profile} />
//     <Route path={`/home/comments`} component={Comments} />
//     <Route path={`/home/contact`} component={Contact} />
//   </Switch>
// </div> */}
//     </main>
//   );
// }

export const MainContent = [
  {
    title: 'Report',
    path: '/report',
    icons: <IoIcons.IoIosMail />,
    cName: 'nav-text'
  },
  {
    title: 'Balance',
    path: '/balance',
    icons: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'FundTransfer',
    path: '/fund',
    icons: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
]