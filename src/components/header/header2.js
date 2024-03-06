import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border:"1px solid #777",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    "&:hover":{
        border:"1px solid #333"
    },
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        width: '20ch',
    },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const options = [
    "All Catagories",
    "CAR",
    "Clothes",
    "Electronics"
];

export default function Hrader2 () {
    const theme=useTheme()
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] =useState(0);
    const handleMenuItemClick = (event,index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        };
    
        const handleClose = () => {
        setAnchorEl(null);
        };
        const open = Boolean(anchorEl);
        const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
};
    return (
        <div className="container" style={{display:"flex",marginBottom:"20px",justifyContent:"space-between",alignItems:"center",paddingTop:"20px"}}>
            <div style={{textAlign:"center"}} className='none'>
                <ShoppingCartIcon style={{paddingBottom:"0"}}/>
                <p style={{paddingTop:"0px",fontWeight:"bold",marginTop:"0px"}}>E-commerce</p>
            </div>
            <div>
            <Search sx={{ display:"flex",borderRadius:"22px",justifyContent:"space-between",minWidth:"500px",padding:"0px"}}>
                <SearchIconWrapper >
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                >/</StyledInputBase>
                <div>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{bgcolor:theme.palette.mycolor.main,borderBottomRightRadius:"22px",borderTopRightRadius:"22px" }}
                    >
                        <ListItemButton
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                        sx={{padding:"0px"}}
                    >
                    <ListItemText
                    secondary={options[selectedIndex]}
                    sx={{width:"110px",padding:"0px 0 0 10px",textAlign:"center"}}
                    />
                    <ExpandMoreIcon/>
                    </ListItemButton >
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
                        </div>
            </Search>
            </div>
            <div  style={{paddingBottom:"0"}}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="primary">
                        <ShoppingCartIcon/>
                    </StyledBadge>
                </IconButton>
                <IconButton >
                    <PersonOutlineIcon/>
                </IconButton>
            </div>
        </div>
    )
}