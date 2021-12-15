import {Link} from "react-router-dom";
import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navLinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
        fontSize: "20px",
        fontWeight: 'normal',
        // padding: "10px",
        justifyContent: 'space-between',
        textDecoration: "none",
        color: "white",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
    barRoot: {
        backgroundColor: "black",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
        fontSize: "30px",
        color: "gray",
        textDecoration: "none",
        fontWeight: 'bold',
    },
    link: {
        textDecoration: "none",
        color: "gray",
        marginRight: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));


function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline/>
            <Toolbar classes={{root: classes.barRoot}}>
                <Link to="/landing" className={classes.logo} activeStyle>
                    HaiThere
                </Link>
                <Link to="/projects" className={classes.navLinks} activeStyle>
                    Projects
                </Link>
                <Link to="/sketches" className={classes.navLinks} activeStyle>
                    Sketches
                </Link>
                <Link to="/posts" className={classes.navLinks} activeStyle>
                    Posts
                </Link>
                <Link to="/about" className={classes.navLinks} activeStyle>
                    About
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
