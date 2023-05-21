import React from "react";
import Marquee from "react-fast-marquee";

const Reviws = () => {
  return (
<>
    
    <h2 className="mt-8 mb-8 font-bold text-4xl text-center">Cient Review</h2>
    <Marquee className="mt-8 mb-8">
        
      <div className="bg-black  text-white  container mr-4 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://i.ibb.co/K7vDFdP/Untitled1.jpg"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold"> Dina B.</h4>
              <span className="text-xs dark:text-gray-400">5 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <svg
              xmlns="https://i.ibb.co/CBwqXfG/Untitled.jpg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">4.5</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>
          Last week I contacted a meter sales company and asked for a quote on 10 of one type of meter and 10 of another type. The stated MOQ for these items was 1 - one single piece of each meter....... 
          </p>
          <p>
            Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
            mauris cursus venenatis. Maecenas gravida urna vitae accumsan
            feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
          </p>
        </div>
      </div>
      <div className="bg-black text-white  container mr-4 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://i.ibb.co/kSMXtX0/Untitled2.jpg"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Fraud</h4>
              <span className="text-xs dark:text-gray-400">2 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">4</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>
          Please don't order any heavy stuff from there. Also, you will not realize shipping you will pay almost the same or more then the actual product. Which they will not reveal you. Also when the goods arrive and are not good. Alibaba, will not help you.
          </p>
          <p>
            Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
            mauris cursus venenatis. Maecenas gravida urna vitae accumsan
            feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
          </p>
        </div>
      </div>
      <div className="bg-black text-white  container mr-4 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://i.ibb.co/yXW7Rxd/Untitled4.jpg"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">s m shaown</h4>
              <span className="text-xs dark:text-gray-400">2 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">4.5</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>
          good when there is dispute. I sent them videos and pic's every thing. They didn't do any thing. I wasted couple of thousand dollars there
          </p>
          <p>
            Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
            mauris cursus venenatis. Maecenas gravida urna vitae accumsan
            feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
          </p>
        </div>
      </div>
      <div className="bg-black text-white  container mr-4 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Chavaughn L.</h4>
              <span className="text-xs dark:text-gray-400">2 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">4</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>
          I've been using this site for a while a never had any issues until a company I purchased $8,000 worth of products from, sent me my products two months..
          </p>
          <p>
            Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
            mauris cursus venenatis. Maecenas gravida urna vitae accumsan
            feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
          </p>
        </div>
      </div>
    </Marquee>

    </>
  );
};

export default Reviws;
