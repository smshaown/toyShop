import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 200,
    })
  },[])
    return (
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">


      <h2 className='text-center mb-5 text-2xl font-bold'>Toy Car Gallery </h2>


      <div  className="-m-1 flex flex-wrap md:-m-2">
        <div data-aos="fade-up" className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1626023772800-eadff10c0f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"              
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZ_fdlSICFhz0T88MziDNbCvKKQkHNSQJQQ&usqp=CAU" />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://img.freepik.com/free-photo/vintage-miniature-car-fake-landscape_155003-1097.jpg?size=626&ext=jpg&ga=GA1.1.2105355461.1683545316&semt=ais" />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div  data-aos="fade-up" className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://img.freepik.com/free-photo/closeup-orange-wooden-toy-car-tracks-lights_181624-23893.jpg?size=626&ext=jpg&ga=GA1.1.2105355461.1683545316&semt=ais" />
          </div>
          <div  data-aos="fade-up" className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?size=626&ext=jpg&ga=GA1.1.2105355461.1683545316&semt=ais" />
          </div>
          <div  data-aos="fade-up" className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://www.jiomart.com/images/product/original/rvlewfbtia/enorme-pull-back-yellow-school-bus-public-transport-toy-car-with-openable-gate-product-images-orvlewfbtia-p596897524-0-202301031540.jpg" />
          </div>
        </div>
      </div>
    </div>
      

    );
};

export default Gallery;