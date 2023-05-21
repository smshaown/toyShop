import React from "react";
import "./Grouth.css";

const Growth = () => {
  return (
   <div className="mt-12">
	<h2 className="text-2xl font-bold text-center">Get Offer</h2>
	<p className="text-center  mb-8">Great offers going on, login fast and get in the loop</p>
<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row mt-12 mb-12">
    <img src="https://images.unsplash.com/photo-1534732806146-b3bf32171b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-[#E7AD3B] text-white">
    <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br className="sm:hidden" /> 30% Of
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Toy Products</span>
				{/* <span className="font-bold text-lg">Toy</span> */}
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a>
		</div>
	</div>
</div>
     
    </div>
</div>
   </div>
  );
};

export default Growth;
