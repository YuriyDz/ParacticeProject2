
import Image from "next/image";
//import "@/app/newStyles.css"
import "./page.module.css";
import { Slider } from "./components/slider";
import { headers } from "next/headers";

export default function Home() {
  return (
    <div>
    
    <div style={{height: "60px"}}/>
   <Slider/>
     </div>);
}
