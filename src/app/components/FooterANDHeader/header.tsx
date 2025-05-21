import Image from "next/image";
import "@/app/newStylesMy.css";
import "@/app/page.module.css";
import { Slider } from "../slider";
import { headers } from "next/headers";

export default function Headers (){
return (
    <header className="headerMy">
      <img src="https://www.marvelrivals.com/pc/gw/20241128194803/img/logo_ad22b142.png" style={{height: "50px", padding: "5px", margin: "5px", marginLeft: "25px"}}/>
     <div style={{width: '100%'}}/>
     <div className="lang"><img src="https://www.marvelrivals.com/pc/gw/20241128194803/img/lan_1e24db6d.png" style={{scale: "0.8"}}/></div>
      <button className="buttonLogin"><nobr>LOG IN</nobr></button>
      <button className="ButtonDownload">DOWNLOAD</button>
    </header>
);
}