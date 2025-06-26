import Image from "next/image";

import "@/app/page.module.css";

import { Slider } from "../slider";
import { headers } from "next/headers";


export default function Footer() {
  return (
    <footer className="ffot footerZIndex">
      <div className="footerHalf" />
      <img
        src="https://www.marvelrivals.com/pc/gw/20241128194803/img/bqIcon_c1bf7a6b.png"
        className="footerIcon"
      />
      <div className="footerTextBlock">
        <text className="fotterText">©2025 MARVEL</text>
        <br />
        <text className="fotterText">©1997-2025 NetEase,Inc. All Rights Reserved</text>
        <a
          href="https://protocol.unisdk.easebar.com/release/latest_v487.html"
          className="fotterText"
        >
          Terms of Use
        </a>
        <nobr>
          <a
            href="https://protocol.unisdk.easebar.com/release/latest_v475.html"
            className="fotterText"
          >
            Privacy Policy
          </a>
        </nobr>
      </div>
      <div className="footerHalf" />
      <img
        src="https://www.marvelrivals.com/pc/gw/20241128194803/img/ESRB_3bdeb4db.png"
        className="footerIcon"
      />
    </footer>
  );
}