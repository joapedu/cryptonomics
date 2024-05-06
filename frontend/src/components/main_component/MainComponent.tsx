import React, { ReactElement } from "react";
import logo from '../../assets/logo-vertical-menu.png';
import {
    AppBar,
    Button,
    Container,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Toolbar,
    Typography
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { ChatComponent, CoinectionsComponent, HomeComponent, SettingsComponent } from "./components";
// fazer um comportamento que troque o conteúdo priincipal (Home) pelos demais:
// Coinections, Chat, Settings e o método de (Logout)

const MainComponent = (): ReactElement => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const setComponent = (home: boolean, coinections: boolean, chat: boolean, settings: boolean) => {
        if (home === false && coinections === false && chat === false && settings === false) {
            return (<HomeComponent />)
        }
        else if (home === true) {
            return (<HomeComponent />)
        }
        else if (coinections === true) {
            return (<CoinectionsComponent />)
        }
        else if (chat === true) {
            return (<ChatComponent />)
        }
        else if (settings === true) {
            return (<SettingsComponent />)
        }
    }

    const goToHome = (home: boolean, coinections: boolean, chat: boolean, settings: boolean) => {
        return (
            home = true,
            coinections = false,
            chat = false,
            settings = false
        )
    }
    const goToCoinections = (home: boolean, coinections: boolean, chat: boolean, settings: boolean) => {
        return (
            home = false,
            coinections = true,
            chat = false,
            settings = false
        )
    }
    const goToChat = (home: boolean, coinections: boolean, chat: boolean, settings: boolean) => {
        return (
            home = false,
            coinections = false,
            chat = true,
            settings = false
        )
    }
    const goToSettings = (home: boolean, coinections: boolean, chat: boolean, settings: boolean) => {
        return (
            home = false,
            coinections = false,
            chat = false,
            settings = true
        )
    }

    let home: boolean
    let coinections: boolean
    let chat: boolean
    let settings: boolean

    return (<>
        <AppBar position="relative" style={{ backgroundColor: '#382648' }}>
            <Toolbar>
                <Typography variant="h3">
                    <Button aria-label="delete" color='inherit' size='large' onClick={toggleDrawer(true)}><MenuIcon /></Button>
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            anchor="left"
            disableScrollLock
        >
            <List style={{ width: '100%', height: '100%', backgroundColor: '#382648' }}>
                <ListItem style={{ marginTop: '15%' }}>
                    <img src={logo} alt="Cryptonomics Inc. logo" width="90%" />
                </ListItem>
                <ListItem style={{ marginTop: '15%' }}>
                    <ListItemButton onClick={() => goToHome(home, coinections, chat, settings)}><HomeOutlinedIcon /></ListItemButton>
                </ListItem>
                <ListItem style={{ marginTop: '15%' }}>
                    <ListItemButton onClick={() => goToCoinections(home, coinections, chat, settings)}><CurrencyExchangeOutlinedIcon /></ListItemButton>
                </ListItem>
                <ListItem style={{ marginTop: '15%' }}>
                    <ListItemButton onClick={() => goToChat(home, coinections, chat, settings)}><ChatBubbleOutlineOutlinedIcon /></ListItemButton>
                </ListItem>
                <ListItem style={{ marginTop: '15%' }}>
                    <ListItemButton onClick={() => goToSettings(home, coinections, chat, settings)}><SettingsIcon /></ListItemButton>
                </ListItem>
                <ListItem alignItems="center" style={{ marginTop: '100%', verticalAlign: 'bottom', width: '100%' }}>
                    <ListItemIcon>
                        <LogoutIcon style={{ cursor: 'pointer' }} onClick={() => (window.location.reload())} />
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
        <Container style={{backgroundColor: '#382648', height: '100vh'}} maxWidth="xl" >
            Renderizar o componente aqui
        </Container>
    </>
    )
}

export { MainComponent }