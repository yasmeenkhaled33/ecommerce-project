import { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from "@emotion/react";
import WindowIcon from '@mui/icons-material/Window';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ElectricBikeOutlinedIcon from '@mui/icons-material/ElectricBikeOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Accordion,  AccordionSummary, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Lastheader() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [state, setState] =useState({
        top: false});
    const theme=useTheme()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const toggleDrawer =(anchor,open) =>(event) => {
        if (event.type === 'keydown' &&
        (event.key === 'Tab' ||event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };
return (
    <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"30%",backgroundColor:theme.palette.mycolor.main,padding:"10px",borderRadius:"10px"}}>
            <div style={{display:"flex",alignItems:"center"}}>
                <WindowIcon/>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{color:theme.palette.text.primary,textTransform:"capitalize"}}
                        >
                        Categories
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        sx={{".MuiPaper-root":{width:"250px"}}}
                        >
                        
                        <MenuItem onClick={handleClick}>
                            <ListItemIcon>
                            <ElectricBikeOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText>Bikes</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClick}>
                            <ListItemIcon>
                            <LaptopChromebookOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText>Electronics</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClick}>
                            <ListItemIcon>
                            <MenuBookOutlinedIcon/> 
                            </ListItemIcon>
                            <ListItemText>Books</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClick}>
                            <ListItemIcon>
                            <SportsEsportsOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText>Games</ListItemText>
                        </MenuItem>
                        
                    </Menu>
                    </div>
            </div>
            <KeyboardArrowRightIcon/>
        </div>
        <MenuIcon style={{cursor:"pointer"}} onClick={toggleDrawer("top", true)}/>
        <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            onOpen={toggleDrawer("top", true)}
            sx={{".MuiPaper-root":{height:"100%"}}}
        >
        <div style={{width:"100%",height:"100vh",position:"relative"}}>
            <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"700px",height:"500px"}}>
                <box style={{position:"absolute",top:"40px",right:"40px",padding:"10px"}}>
                    {[{key:1,name:"Home",list1:"link 1",list2:"link 2",list3:"link 3"},
                    {key:2,name:"Mega menu",list1:"link 1",list2:"link 2",list3:"link 3"},
                    {key:3,name:"full screen menu",list1:"link 1",list2:"link 2",list3:"link 3"},
                    {key:4,name:"pages ",list1:"link 1",list2:"link 2",list3:"link 3"},
                    {key:5,name:"user account ",list1:"link 1",list2:"link 2",list3:"link 3"},
                    {key:6,name:"vender account",list1:"link 1",list2:"link 2",list3:"link 3"}].map((el)=>{
                        return (
                            <Accordion key={el.key} elevation={0} style={{backgroundColor:"transparent",width:"500px"}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            {el.name}
                            </AccordionSummary>
                            <List sx={{py:0,my:0}}>
                                <ListItem sx={{py:0,my:0}}>
                                    <ListItemButton>
                                    <ListItemText primary={el.list1} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#simple-list">
                                    <ListItemText primary={el.list2} />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton component="a" href="#simple-list">
                                    <ListItemText primary={el.list3} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Accordion>
                        )
                    })}
                </box>
                <box style={{width:"30px",position:"absolute",top:"0px",right:"0px"}}>
                    <CloseIcon  sx={{":hover":{rotate:"180deg",transition:"0.3s",color:"red"}}} onClick={toggleDrawer("top", false)} />
                </box>
            </div>
        </div>
            
        </Drawer>
    </div>
    )
}