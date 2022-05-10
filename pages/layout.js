import React, { useState } from 'react';
import Head from 'next/head'

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function layout(props, { children, title, description }) {

    const [open, setOpen] = useState(true);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // const router = useRouter();

    // useEffect(() => {
    //     // redirect to home if already logged in
    //     if (userService.userValue) {
    //         router.push('/');
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawerWidth = 240

    const list = () => (
        <div style={{ width: drawerWidth }} onClick={() => setOpen(false)}>
            <Toolbar />
            <Divider />
            <List>
                {['Home', 'Inbox', 'Outbox', 'Sent mail', 'Draft', 'Trash', 'Logout'].map((label, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={label}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <style jsx>{`
                body {
                    display: flex !important;
                    min-height: 100vh !important;
                    flex-direction: column !important;
                }

                main {
                    flex: 1 0 auto !important;
                }
            `}
            </style>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    id="principal-toolbar"
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                ></Box>
                <Drawer container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}>

                    {list()}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {list()}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, pt: 8, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
            >{props.children}</Box>
            <Box sx={{ display: 'flex', ml: { sm: `${drawerWidth}px` } }}>
                <footer className="page-footer">
                    <div className="footer-copyright">
                        <div className="container">
                            © 2022 Copyright AjR
                            <a className="grey-text text-lighten-4 right" href="#!">Linkedin</a>
                        </div>
                    </div>
                </footer>
            </Box>
        </>
    )
}

export default layout;