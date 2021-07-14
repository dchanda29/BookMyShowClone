import React from "react";

const Poster=(props)=>{

    return(
        <>
        <div className="flex flex-col items-start gap-2 px-3">
            <div className="h-80">
                <img src={props.src} alt={props.title}/>
            </div>
            <h3 className={`text-lg font-bold ${props.isDark? "text-white": "text-gray-700"}`}>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    </>
        );


};