import Image from "next/image";

import "@/app/page.module.css";

import { Slider } from "../slider";
import { headers } from "next/headers";


export default function Footer (){
return (
    <footer className="ffot" style={{zIndex: "11"}}>
    <div style={{width: "50%"}}/>
    <img src="https://www.marvelrivals.com/pc/gw/20241128194803/img/bqIcon_c1bf7a6b.png" style={{ scale: "1", width: "auto", height: "50px",margin: "10px"}}/>
    <div style={{height: "50px",width: "auto",textAlign: "left", margin: "10px"}}>
      <text className="fotterText">
©2025 MARVEL
      </text>
<br/>
        <text className="fotterText">
©1997-2025 NetEase,Inc. All Rights Reserved
      </text>
      <a href="https://protocol.unisdk.easebar.com/release/latest_v487.html" className="fotterText">Terms of Use</a>
      <nobr> <a href="https://protocol.unisdk.easebar.com/release/latest_v475.html" className="fotterText" >  Privacy Policy</a></nobr>
    </div>
      <div style={{width: "50%"}}></div>
    
    <img src="https://www.marvelrivals.com/pc/gw/20241128194803/img/ESRB_3bdeb4db.png" style={{ scale: "1", width: "auto", height: "50px",margin: "10px"}}/></footer>
);
}