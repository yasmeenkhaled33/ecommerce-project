import   { useContext } from "react";
import { ColorModeContext } from "../../them";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./../../App.css"


const options = [
    "Ar",
    "En",
];

export default function Hrader1 () {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] =useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event,index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
return (
        <Box sx={{bgcolor:"#203445",py:"3px",borderBottomRightRadius:"6px",borderBottomLeftRadius:"6px"}}>
            <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div className="left" style={{display:"flex",alignItems:"center",color:"white"}}>
                    <h4 style={{color:"white",backgroundColor:"red",width:"70px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px",height:"40px",margin:"15px 10px 15px 0px"}}>HOT</h4>
                    <p style={{fontSize:"20px"}}>free express shipping</p>
                </div>
                <div className="right" style={{display:"flex",alignItems:"center"}}>
                    <div style={{marginRight:"10px"}}>
                        {theme.palette.mode === "light" ? (
                        <IconButton
                            onClick={() => {
                            localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                            );
                            colorMode.toggleColorMode();
                            }}
                            color="inherit"
                        >
                            <LightModeOutlined sx={{color:"white"}} />
                        </IconButton>
                        ) : (
                        <IconButton
                            onClick={() => {
                            localStorage.setItem(
                                "mode",
                                theme.palette.mode === "dark" ? "light" : "dark"
                            );
                            colorMode.toggleColorMode();
                            }}
                            color="inherit"
                        >
                        <DarkModeOutlined sx={{color:"white"}}/>
                        </IconButton>
                        )}
                    </div>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ bgcolor: "#203445",margin:"0px",padding:"0px" }}
                    >
                        <ListItemButton
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                        sx={{"$:hover":{cursor:"pointer"},padding:"0px",marginRight:"10px"}}
                    >
                        <ListItemText sx={{".MuiTypography-root":{fontSize:"20px",color:"white"}}}
                        secondary={options[selectedIndex]}
                    />
                    <ExpandMoreIcon style={{color:"white"}}/>
                        </ListItemButton>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                    >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                        {option}
                        </MenuItem>
                    ))}
                    </Menu>       
                        <FacebookIcon style={{color:"white",marginRight:"10px"}}/>
                        <TwitterIcon style={{color:"white",marginRight:"10px"}}/>
                        <InstagramIcon style={{color:"white"}}/>
                </div>  
            </div>
        </Box>   
    
    )
}