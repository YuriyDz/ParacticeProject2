'use client'
 
import { useEffect } from 'react'
import React, { CSSProperties } from "react";
import arr from "../../../public/tt.png";
import "@/app/components/buttons.css";
import { useSnapCarousel} from "react-snap-carousel";
import {data,typesImages,imagesLogo,imageBackground,imageBackgroudBacker,heros  } from "@/app/data.js";

const heightConst = 700;





const card =(id: number, idActive: number, name: string, type: string, description: string)=>(
<div style={{ minWidth: '100%',height: "100%"}}>
    
    <div className='cardBody' style={{backgroundImage: `url(${imageBackground[id]}), url(${imageBackgroudBacker[id]})`}}>

    <div className='leftPart'>
<div className='underLeftPanel'>
 <div style={{width: "100%", height: "auto"}}>
   
  <div style={{width: "auto", height: "2.5rem", flexDirection: "row"}}>
    <text className="type">{type}</text>
{ idActive == 0?    
<img src={imagesLogo[id]}  className='imgLogo'></img>
: null}
  <img src={typesImages[id]} style={{position: "absolute", width: "auto", scale: 0.8}}></img>
 
    
  </div>


      
        <text className = "description">{name}</text>
    </div>
   
        
  <text className='nameDesc'>{name}</text><div style={{width: "100%", height: "0.1rem", backgroundColor: "black"}}></div>
    <br/>
    <text>{description}</text>



  </div>
    </div>
    </div>
</div>
);
/*
    
     <div className='imageDiv' style={{backgroundImage: `url(${typesImages[id]})`}}><img src={imagesLogo[id]} style={{scale: "70%",right: "210%", bottom: "110%", position: "relative"}}></img></div>
    
      <text className="type">{type}</text>  




  <div className='topPanel'>
        
      <img src={imagesLogo[id]} style={{scale: 0.7, position: "relative", left: "4rem", top: "7.5rem"}}></img>
      <img src={typesImages[id]} style={{scale: 0.9}}/>
      <text className="type">{type}</text>  
        
    </div>
     
        <text className = "description">{name}</text>
        <br/>
  <text className='nameDesc'>{name}</text><div style={{width: "100%", height: "0.1rem", backgroundColor: "black"}}></div>
    <br/>
    <text>{description}</text>

    </div>
    <div style={{position: "relative", height: "100%", width: "50%"}}>
   <img className='images' src={heros[id]}/>
</div>
*/


export const Slider = () =>{
   

    const { scrollRef, pages, activePageIndex, next, prev } = useSnapCarousel();

return (<div>
<div className='buttonsDiv'>
    <button onClick={()=>prev()} className='button' style={{rotate: "270deg"}}></button>
    
    <button onClick={()=>next()} className='button' style={{rotate: "90deg", right: "0%"}}></button>
</div>
<div className='scroll' ref = {scrollRef} style={{width: "100%", height: heightConst+"px",display: 'flex',
          overflow: 'hiden',scrollSnapType: 'x mandatory'}}>
{
data.map((i,index)=>card(i.typeIm,activePageIndex-index,i.name,i.type, i.desc))
}
</div>

</div>);

} 