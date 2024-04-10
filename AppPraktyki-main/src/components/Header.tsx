import * as React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';

type Props = { accountName: string, subscriptionDaysLeft: string }
function Header(props: Props) {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div id="header" style={{ position: 'relative' }}>
            <Toolbar>
                <IconButton>
                    <HomeIcon fontSize='large'/>
                </IconButton>
                <div style={{ flexGrow: 1 }} />
                <IconButton onClick={handleClick}>
                    <AccountBoxIcon fontSize='large'/>
                </IconButton>
            </Toolbar>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                sx={{
                    position: 'absolute',
                    top: '48px', // Ustaw odległość od góry
                    left: '90%',
                    zIndex: 1, // Ustaw z-index, aby lista była widoczna na wierzchu
                    display: open ? 'block' : 'none'
                }}
            >
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        Konto: {props.accountName}
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        Subskrypcja ({props.subscriptionDaysLeft})
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </div>
    )
}
export default Header;
