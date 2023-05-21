import React from 'react';
import Navbar from '../pagess/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pagess/Shared/Footer/Footer';
// import Navbar2 from '../pagess/Shared/Navbar/Navbar2';
const Main = () => {
    return (
        <div className='mx-auto container'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;