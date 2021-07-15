import React from "react";
import HeroSlider from "react-slick";



//component
import {NextArrow,PrevArrow } from "./Arrows.component";


const HeroCarousal=()=>{

  const settingsLg={
    arrows:true, 
    autoplay:true,
    centerMode:true,
    centerPadding:"300px",
    slidesToShow:1,
    infinite:true,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };

    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };

      const images = [
        "https://images.unsplash.com/photo-1503160865267-af4660ce7bf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1523473125050-1c9405e8b208?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        "https://images.unsplash.com/photo-1583504491400-a6270df17ebc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      ];
    

    return (
        <>
        <div className="lg:hidden">
        <HeroSlider{...settings}>
        {images.map((image)=>(
            <div className="w-full h-56 md:h-80 py-3">
            <img src={image} alt="testing" className="w-full h-full"></img>
            </div>
        ))}
        </HeroSlider>
        </div>

        <div className="hidden lg:block">
        <HeroSlider{...settingsLg}>
        {images.map((image)=>(
            <div className="w-full h-96 px-2 py-3">
            <img src={image} alt="testing" className="w-full h-full rounded-md"></img>
            </div>
        ))}
        </HeroSlider>
        </div>
        </>
    );
};

export default HeroCarousal;