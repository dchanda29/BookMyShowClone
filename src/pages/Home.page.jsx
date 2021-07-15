import React from "react";

//Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

import Premier from "../components/Premier/Premier.component";

const HomePage=()=>{

    return(

     <>
    <div className="flex flex-col gap-10">
    <div className="container mx-auto px-4 ">
         <h1 className="text-2xl font-bold text-gray-800 my-3">The Best Of Entertainment</h1>
     <EntertainmentCardSlider/>
     </div>
     <div className="bg-gray-800 py-12">
     <div className="hidden items-center justify-between md:flex ">
          <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="Rupay"
            className="w-full h-full"
          />
        </div>

        <div className="container mx-auto-4 py-4">
        <Premier/>
        </div>
     </div>
    </div>

     
     </>
    );
};
export default HomePage;