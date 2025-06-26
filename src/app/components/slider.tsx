'use client'
 
import { useEffect } from 'react'
import React, { CSSProperties } from "react";
import arr from "../../../public/tt.png";
import "@/app/components/buttons.css";
import { useSnapCarousel} from "react-snap-carousel";
import {data,typesImages } from "@/app/data.js";

const heightConst = 700;

const card = (
  id: string,
  idActive: boolean,
  name: string,
  type: string,
  description: string
) => (
  <div className="cardWrapper">
    <div
      className="cardBody"
      style={{
        backgroundImage: `url(${typesImages[id]["imageBackground"]}), url(${typesImages[id]["imageBackgroudBacker"]})`,
      }}
    >
      <div className="leftPart">
        <div className="underLeftPanel">
          <div className="leftPanelTop">
            <div className="logoRow">
              {idActive ? (
                <img src={typesImages[id]["imagesLogo"]} className="imgLogo" />
              ) : null}
              <img src={typesImages[id]["icon"]} className="imgType" />
              <text className="type">{type}</text>
            </div>
            <text className="description">{name}</text>
          </div>

          <text className="nameDesc">{name}</text>
          <div className="dividerLine" />
          <br />
          <text>{description}</text>
        </div>
      </div>

      <div className="imagePart">
        <img
          className="images"
          style={{
            top: typesImages[id]["offset"]["top"],
            right: typesImages[id]["offset"]["right"],
            scale: typesImages[id]["offset"]["scale"],
          }}
          src={typesImages[id]["heros"]}
        />
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
data.map((i,index)=>card(i.typeIm,activePageIndex == index,i.name,i.type, i.desc))
}
</div>

</div>);

} 