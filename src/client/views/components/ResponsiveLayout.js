import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import { grey } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';

import ToolbarLinkIcons from './ToolbarLinkIcons';

export const makeResponsiveLayout = (drawerWidth = 240) => {
  const styles = theme => ({
    root: {
      width: '100%',
      height: '100vh',
      zIndex: 1,
      overflow: 'hidden',
    },
    appFrame: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    appBar: {
      position: 'absolute',
      transition: theme.transitions.create('width'),
      // marginLeft: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    title: {
      textTransform: 'capitalize',
      fontSize: 20,
      flex: 1,
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    avatar: {
      '&:hover': {
        opacity: 0.6,
        backgroundColor: grey[300],
      },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        position: 'relative',
        height: '100%',
      },
    },
    content: {
      backgroundColor: theme.palette.background.default,
      width: '100%',
      padding: theme.spacing.unit * 2,
      height: 'calc(100% - 64px)',
      marginTop: 64,
      overflow: 'auto',
      '-webkit-overflow-scrolling': 'touch',
    },
  });

  class LayoutWithMenu extends PureComponent {
    state = {
      mobileOpen: false,
    };

    handleDrawerToggle = () => {
      const { mobileOpen } = this.state;
      this.setState({ mobileOpen: !mobileOpen });
    };

    render() {
      const { classes, title, drawerHeader, drawerMenu, appbarProps, children, ...restProps } = this.props;
      const { mobileOpen } = this.state;

      const drawer = (
        <div>
          <div className={classes.drawerHeader}>
            { drawerHeader }
          </div>
          <List>
            { drawerMenu }
          </List>
        </div>
      );

      return (
        <div className={classes.root} {...restProps}>
          <div className={classes.appFrame}>
            <AppBar className={classes.appBar} position="absolute" {...appbarProps}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open Menu"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" noWrap className={classes.title}>
                  {title}
                </Typography>
                <ToolbarLinkIcons />
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
              <Drawer
                type="temporary"
                anchor="left"
                open={mobileOpen}
                classes={{
                  paper: classes.drawerPaper,
                }}
                onClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                variant="permanent"
                style={{ height: '100%' }}
                open
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <main className={classes.content}>
              {children}
            </main>
          </div>
        </div>
      );
    }
  }

  LayoutWithMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    drawerHeader: PropTypes.node,
    drawerMenu: PropTypes.node,
    children: PropTypes.node,
    title: PropTypes.string,
    appbarProps: PropTypes.object,
  };

  LayoutWithMenu.defaultProps = {
    drawerHeader: null,
    drawerMenu: null,
    children: null,
    title: '',
    appbarProps: null,
  };

  const layoutWithMenu = withStyles(styles)(LayoutWithMenu);

  return layoutWithMenu;
};

const ResponsiveLayout = makeResponsiveLayout();
export default ResponsiveLayout;
