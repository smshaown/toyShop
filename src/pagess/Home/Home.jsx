import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import MainCatagory from '../SubCartagory/MainCatagory/MainCatagory';
import Reviws from '../Reviws/Reviws';
import Growth from '../Growth/Growth';

const Home = () => {
    return (
        <div>
           <Banner />
           <Gallery />
           <MainCatagory />
           <Growth />
           <Reviws />
        </div>
    );
};

export default Home;