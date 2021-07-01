import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  
//   
//   
  }));

export default function SideBar() {
  const classes = useStyles();
return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        
        <List>
          <ListItem>
             <ListItemIcon><AccountBalanceOutlinedIcon/>Dashboard</ListItemIcon>
             </ListItem>
            <ListItem>
            <Link to='/user'><ListItemIcon><MailIcon/>Users</ListItemIcon></Link>
             </ListItem>
             <ListItem>
             <ListItemIcon>
             <InboxIcon/>Log Out
             </ListItemIcon>
             </ListItem>
            
          
        </List>
      </Drawer>
      
    </div>
  );
}
