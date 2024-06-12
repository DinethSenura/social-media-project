import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import MiddlePart from './MiddlePart'; // Assuming MiddlePart is in the same directory
import Reels from './Reels'; // Assuming Reels is in the same directory
import CreateReelsFrom from './CreateReelsFrom'; // Assuming CreateReelsFrom is in the same directory
import Profile from './Profile'; // Ensure this path and file name are correct
import Profile from './Profile.jsx'; // or .js


const HomePage = () => {
    const location = useLocation();
    return (
        <div className='px-20'>
            <Grid container spacing={0}>
                <Grid item xs={0} lg={3}>
                    <div className='sticky top-0'>
                        <Sidebar />
                    </div>
                </Grid>
                <Grid lg={location.pathname === "/" ? 6 : 9}
                    item
                    className="px-5 flex justify-center"
                    xs={12}>
                    <Routes>
                        <Route path="/" element={<MiddlePart />} />
                        <Route path="/reels" element={<Reels />} />
                        <Route path="/create-reels" element={<CreateReelsFrom />} />
                        <Route path="/profile/:id" element={<Profile />} />
                    </Routes>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage;
