'use client'
 
import { useEffect } from 'react'
import React, { CSSProperties } from "react";
import arr from "../../../public/tt.png";
import "@/app/components/buttons.css";
import { useSnapCarousel} from "react-snap-carousel";
import {data,typesImages} from "@/app/data.js";

const heightConst = 700;

const card =(id: number, name: string, type: string, description: string)=>(
<div style={{ minWidth: '100%',height: "100%", background: "white"}}>

    <div className='cardBody' style={{backgroundColor: "cyan"}}>
        <div style={{width: "60%", height: "auto", marginLeft: "20%"}}>
        <img src={typesImages[id]} style={{width: "5%", height: "5%"}}/><text className="type">{type}</text>
        <br/>
        <text className = "description">{name}</text>
        <br/>
        <text className='nameDesc'>{name}</text><div style={{width: "100%", height: "2px", backgroundColor: "black"}}></div>
        <br/>
        <text>{description}</text>
        </div>
    </div>
</div>
);



export const Slider = () =>{
   

    const { scrollRef, pages, activePageIndex, next, prev } = useSnapCarousel();

return (<div>
<div style = {{width: "100%", height: "0px", display: "flex", zIndex: "10"}}>
    <button onClick={()=>prev()} className='button' style={{rotate: "270deg", marginTop: heightConst/2-150+"px"}}></button>
    <button onClick={()=>next()} className='button' style={{rotate: "90deg" ,marginTop: heightConst/2-150+"px", marginLeft: "90%"}}></button>
</div>
<div ref = {scrollRef} style={{width: "100%", height: heightConst+"px",display: 'flex',
          overflowX: 'auto',scrollSnapType: 'x mandatory',}}>
{
data.map((i,index)=>card(i.typeIm,i.name,i.type, i.desc))
}
</div>

</div>);

} 