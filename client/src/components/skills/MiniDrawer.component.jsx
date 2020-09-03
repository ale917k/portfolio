import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import SimpleBarReact from "simplebar-react";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import LineStyleRoundedIcon from "@material-ui/icons/LineStyleRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import CameraRoundedIcon from "@material-ui/icons/CameraRounded";
import BackupRoundedIcon from "@material-ui/icons/BackupRounded";
import CachedRoundedIcon from "@material-ui/icons/CachedRounded";
import UpdateRoundedIcon from "@material-ui/icons/UpdateRounded";

const navLinks = [
  { title: "Frontend", Icon: LineStyleRoundedIcon },
  { title: "Backend", Icon: StorageRoundedIcon },
  { title: "Design", Icon: CameraRoundedIcon },
  { title: "Other", Icon: BackupRoundedIcon },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  closeSkills: {
    position: "absolute",
    right: theme.spacing(2),
  },
  scrollbar: {
    maxHeight: '100vh',
    backgroundColor: theme.palette.common.white,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
  },
}));

const MiniDrawer = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Skills
          </Typography>
          <IconButton
            color="inherit"
            aria-label="close skills"
            edge="start"
            component={RouterLink}
            to="/about"
            className={classes.closeSkills}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navLinks.map(({ title, Icon }) => (
            <ListItem
              button
              key={title}
              component={RouterLink}
              to={`/skills/${title.toLowerCase()}`}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button component={RouterLink} to="/skills/progress">
            <ListItemIcon>
              <CachedRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Progress" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={RouterLink} to="/skills/next">
            <ListItemIcon>
              <UpdateRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="What's Next" />
          </ListItem>
        </List>
      </Drawer>
      <SimpleBarReact className={classes.scrollbar}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
        </main>
      </SimpleBarReact>
    </div>
  );
};

export default MiniDrawer;
