import React from "react";
import horizontalLine from "../../assests/horizontalLine.png";
import zigzagLine from "../../assests/zigzagLine.png";
import zigzagCircle from "../../assests/zigzagCircle.png";
import { ChapP2 } from "./ChapIntroElements";

function HideShowcontent() {
  return (
    <>
      <ChapP2>Introduction to Light</ChapP2>
      <img src={horizontalLine} alt="" className="chap__horizontalLine" />
      <img src={zigzagLine} alt="" className="chap__zigzagLine" />
      <img src={zigzagCircle} alt="" className="chap__zigzagCircle1" />
      <img src={zigzagCircle} alt="" className="chap__zigzagCircle2" />
      <img src={zigzagCircle} alt="" className="chap__zigzagCircle3" />
      <img src={zigzagCircle} alt="" className="chap__zigzagCircle4" />
      <p className="chap__topic1">Light</p>
      <p className="chap__topic2">Important Facts</p>
      <p className="chap__topic3">Types of Sources of light</p>
      <p className="chap__topic4">Luminious and non luminous</p>
    </>
  );
}

export default HideShowcontent;
