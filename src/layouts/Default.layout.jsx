import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";

import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import HomePage from "../pages/Home.page";


const DefaultLayout=(props)=>{

    return ( <>
           <Navbar/>
           <HomePage/>
            {props.children}

        </>
       );
};
export default DefaultLayout;