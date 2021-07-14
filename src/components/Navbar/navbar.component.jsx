import React from "react";
import {BiChevronRight,BiSearch,BiChevronDown} from "react-icons/bi"

const NavSm=()=>{
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">
                    It All Starts Here!
                </h3>
                <span className="text-gray-400  text-xs flex items-center">Lucknow <BiChevronRight/></span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h=full"/>
            </div>

        </div>
        </>
    );
};

const NavMd=()=>{

    return(
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md ">
            <BiSearch/>
            <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events,Plays,Sports And Activities."></input>
        </div>
    );
};

const NavLg=()=>{

return(
    <>
    <div className="container mx-auto px-4 flex items-center justify-between ">
        <div className="flex items-center w-1/2">
            <div className="w-12 h-12">
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full"></img>
            <div className="w-full flex items-center gap-3 bg-white px-3 py-2 ">
            <BiSearch/>
            <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events,Plays,Sports And Activities."></input>
        </div>

            </div>
        </div>
        <span className="text-gray-400 flex i">Lucknow <BiChevronDown/></span>
        <button className="bg-red-600 text-white px-1 py-2 text-sm rounded">SignIn</button>
        <div>

        </div>
    </div>
    
    
    </>
);



};




const Navbar=()=>{
    return( <>
        <nav className="bg-bmsgrey-700 p-4">
        <div classname="md:hidden">
            {/*Mobile Screen*/}
            <NavSm/>
            </div>
        <div classname="hidden md:flex lg:hidden">{/*Medium Screen*/}
        <NavMd/> 
        </div>
        <div classname="hidden lg:flex">{/*Large Screen*/ }
        <NavLg/>
        </div>
        </nav>
        </>
        );



};






export default Navbar;