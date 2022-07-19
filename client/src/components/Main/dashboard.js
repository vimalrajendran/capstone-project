import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
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
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export default function MainDashboard() {

    let navigate = useNavigate();
    return (
           <div>
            <AppBar position="static" color='success'>
                <Toolbar>

                    <FastfoodTwoToneIcon />
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        marginX={1}
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Nutrition Plus
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon className='ms-2' />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button className='ms-2' color='inherit' onClick={()=> navigate('/login')}>Logout</Button>
                    
                    <Button className='ms-2' color="inherit" onClick={()=> navigate('/login')}>Login</Button>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div>
                <div >
                    <Carousel>
                        <Carousel.Item style={{ 'height': "350px" }} >
                            <img style={{ 'height': "350px" }}
                                className="d-block w-100"
                                src={'assets/img/img1.jpg'} />
                            <Carousel.Caption>
                                {/* <h3>First Demo </h3> */}
                                {/* <p>Click here for Registration</p> */}
                                {/* <Button variant="primary">Register</Button> */}
                            </Carousel.Caption>
                        </Carousel.Item  >
                        <Carousel.Item style={{ 'height': "350px" }}>
                            <img style={{ 'height': "350px" }}
                                className="d-block w-100"
                                src={'assets/img/img3.jpg'} />
                            <Carousel.Caption>
                                {/* <h3>Second Demo</h3> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "350px" }}>
                            <img style={{ 'height': "350px" }}
                                className="d-block w-100"
                                src={'assets/img/img2.jpg'} />
                            <Carousel.Caption>
                                {/* <h3>Third Demo</h3> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        </div>
    );
}