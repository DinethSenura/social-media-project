import { Grid, Card } from '@mui/material'; // Import Card along with Grid
import React from 'react';
import Login from './Login';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';

const Authentication = () => {
  return (
    <div>
        <Grid container>
            <Grid className='h-screen overflow-hidden' item xs={7}>
            <img className='h-full w-full' src="https://img.freepik.com/premium-photo/lot-falling-blocks-with-pictures-social-media_75780-703.jpg?w=900" alt="" />
            </Grid>
            <Grid item xs={5}>

                <div className='px-20 flex flex-col justify-center h-full'>
                    <Card className='card p-8'> {/* Use Card component */}
                        <div className='flex flex-col items-center mb-5 space-y-1'>
                        <h1 className='log text-center'>Zosh Social</h1>
                        <p className='text-center text-sm w-[70&]'>Connecting Lives,Sharing Stories:Your Social world,Your Way</p>
                        </div>

                        <Routes>
                        <Route path='/' element={<Login/>}></Route>
                            <Route path='/login' element={<Login/>}></Route>
                            <Route path='/register' element={<Register/>}></Route>
                        </Routes>

                    </Card>
                </div>
            </Grid>
        </Grid>
      
    </div>
  )
}

export default Authentication;
