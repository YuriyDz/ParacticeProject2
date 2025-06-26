import Image from "next/image";
import "@/app/newStylesMy.css";
import "@/app/page.module.css";
import { Slider } from "../slider";
import { headers } from "next/headers";

export default function Headers() {
  return (
    <header className="headerMy">
      <img
        src="https://www.marvelrivals.com/pc/gw/20241128194803/img/logo_ad22b142.png"
        className="logoImage"
      />
      <div className="headerSpacer" />
      <div className="lang">
        <img
          src="https://www.marvelrivals.com/pc/gw/20241128194803/img/lan_1e24db6d.png"
          className="langIcon"
        />
      </div>
      <button className="buttonLogin">
        <nobr>LOG IN</nobr>
      </button>
      <button className="ButtonDownload">
        <div className="forTextDownload">DOWNLOAD</div>
      </button>
    </header>
  );
}