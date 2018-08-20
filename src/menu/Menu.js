import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDown';
import CalendarToday from '@material-ui/icons/CalendarToday';

import { Link } from 'react-router-dom';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class Menu extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        console.log(this.props)
        const { classes, theme, children } = this.props;

        return (
                <div className={classes.root}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                30 Dias Emagrecer
            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />

                        <List>
                            <Link to="/aceleradores" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ThumbUp />
                                    </ListItemIcon>
                                    <ListItemText primary="Aceleradores" />
                                </ListItem>
                            </Link>
                        </List>

                        <List>
                            <Link to="/moderadores" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ThumbsUpDown />
                                    </ListItemIcon>
                                    <ListItemText primary="Moderadores" />
                                </ListItem>
                            </Link>
                        </List>

                        <List>
                            <Link to="/retardadores" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <ThumbDown />
                                    </ListItemIcon>
                                    <ListItemText primary="Retardadores" />
                                </ListItem>
                            </Link>
                        </List>

                        <List>
                            <Link to="/semanaUm" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CalendarToday />
                                    </ListItemIcon>
                                    <ListItemText primary="Semana 1" />
                                </ListItem>
                            </Link>
                        </List>

                        <List>
                            <Link to="/semanaDois" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CalendarToday />
                                    </ListItemIcon>
                                    <ListItemText primary="Semana 2" />
                                </ListItem>
                            </Link>
                        </List>

                        <List>
                            <Link to="/semanaTres" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CalendarToday />
                                    </ListItemIcon>
                                    <ListItemText primary="Semana 3" />
                                </ListItem>
                            </Link>
                        </List>

                        <List>
                            <Link to="/semanaQuatro" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CalendarToday />
                                    </ListItemIcon>
                                    <ListItemText primary="Semana 4" />
                                </ListItem>
                            </Link>
                        </List>

                    </Drawer>

                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {children}
                    </main>
                </div>
           
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Menu);