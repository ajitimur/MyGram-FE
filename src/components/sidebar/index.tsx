import { Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import "../../styles/sidebar.css"
import React from 'react'
import listRoutes, {ListRoutes} from '../../routes/list-routes';
const drawerWidth = 240;


const SideBar = () => {

  const drawer = (
    <div style={{
      backgroundColor: 'black !important'
    }}>
      <Toolbar />
      <List>
        {listRoutes.map(({name, Icon, path}: ListRoutes, index) => (
          <Link  href={path} underline="none">
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Icon></Icon>
                  <ListItemText primary={name} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Typography variant='subtitle1'>MyGram</Typography> */}
        <Divider />
        {drawer}
        <Divider />

        <div className='logout_button'>
        <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon></LogoutIcon>
                  <ListItemText primary={"Log-Out"} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
      </List>
        </div>
      </Drawer>
  )
}

export default SideBar