import React, { useState, Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";
import UpdateRoundedIcon from "@material-ui/icons/UpdateRounded";

import Scrollbar from "./Scrollbar.component";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  scrollbar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  closeSkills: {
    position: "absolute",
    right: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ContainerWithDrawer = ({ children, page, navLinks }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {navLinks.map(({ title, Icon }) => (
          <ListItem
            button
            key={title}
            component={RouterLink}
            to={`/${page.toLowerCase()}/${title.toLowerCase()}`}
            onClick={isMobile ? handleDrawerToggle : null}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {page === "Skills" && (
        <Fragment>
          <List>
            <ListItem
              button
              component={RouterLink}
              to="/skills/progress"
              onClick={handleDrawerToggle}
            >
              <ListItemIcon>
                <CachedRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Progress" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              component={RouterLink}
              to="/skills/next"
              onClick={handleDrawerToggle}
            >
              <ListItemIcon>
                <UpdateRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="What's Next" />
            </ListItem>
          </List>
        </Fragment>
      )}
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Scrollbar className={classes.scrollbar}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {page}
            </Typography>
            <IconButton
              color="inherit"
              aria-label={`close ${page}`}
              edge="start"
              component={RouterLink}
              to="/about"
              className={classes.closeSkills}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label={`${page} folders`}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          ) : (
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          )}
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </Scrollbar>
    </div>
  );
};

export default ContainerWithDrawer;
