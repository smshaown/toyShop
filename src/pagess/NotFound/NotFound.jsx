import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import error from '../../assets/error.jpg'

const NotFound = () => {
    const {error, status} = useRouteError();
    return (
        <div className='container mx-auto text-center mt-4 '>
            <img src="https://i.ibb.co/GVCH2PT/6549647-404-landingpage-kostenlos-vektor.jpg"   alt="" className='mt-5  h-[300px] img-fulid pl-60 mb-5' />
            <h3 className='fw-bold'> {error.message}</h3>
               
            <h3 className=''>Not Found This Page</h3>

            <button className="btn btn-danger fw-bold"><Link className="text-decoration-none text-white" to="/">Back to homepage</Link></button>  
          
        </div>
    );
};

export default NotFound;