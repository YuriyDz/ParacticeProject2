
import Image from "next/image";
import "@/app/newStyles.css"
import "./page.module.css";
import { Slider } from "./components/slider";
import { headers } from "next/headers";
export default function Home() {
  return (
    <div>
    <header className="headerMy">
      <img src="https://www.marvelrivals.com/pc/gw/20241128194803/img/logo_ad22b142.png" style={{height: "50px", padding: "5px", margin: "5px", marginLeft: "25px"}}/>
     <div style={{width: '100%'}}></div>
     <div className="lang"><img src="https://www.marvelrivals.com/pc/gw/20241128194803/img/lan_1e24db6d.png" style={{scale: "0.8"}}/></div>
      <button className="buttonLogin"><nobr>LOG IN</nobr></button>
      <button className="ButtonDownload">DOWNLOAD</button>
    </header>
    <div style={{height: "60px"}}/>
   <Slider/>
   <footer className="ffot" style={{zIndex: "11"}}>
    <div style={{width: "50%"}}></div>
    <img src="https://www.marvelrivals.com/pc/gw/20241128194803/img/bqIcon_c1bf7a6b.png" style={{ scale: "1", width: "auto", height: "50px",margin: "10px"}}/>
    <div style={{height: "50px",width: "auto",textAlign: "left", margin: "10px"}}>
      <text className="fotterText">
©2025 MARVEL
      </text>
<br></br>
        <text className="fotterText">
©1997-2025 NetEase,Inc. All Rights Reserved
      </text>
      <a href="https://protocol.unisdk.easebar.com/release/latest_v487.html" className="fotterText">Terms of Use</a>
      <nobr> <a href="https://protocol.unisdk.easebar.com/release/latest_v475.html" className="fotterText" >  Privacy Policy</a></nobr>
    </div>
      <div style={{width: "50%"}}></div>
    
    <img src="https://www.marvelrivals.com/pc/gw/20241128194803/img/ESRB_3bdeb4db.png" style={{ scale: "1", width: "auto", height: "50px",margin: "10px"}}/></footer>
  </div>);
}
