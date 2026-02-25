import React from 'react';
import Navbar from '../Sharedstyle/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Sharedstyle/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
                <Outlet></Outlet>
      
            <Footer></Footer>
            
        </div>
    );
};

export default Mainlayout;