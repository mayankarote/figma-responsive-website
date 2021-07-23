import React from "react";
import horizontalLine from "../../assests/horizontalLine.png";
import zigzagLine from "../../assests/zigzagLine.png";
import zigzagCircle from "../../assests/zigzagCircle.png";
import {
  ChapHorizontalLine,
  ChapP2,
  ChapP3,
  ChapZigzagCircle,
  ChapZigzagGroup,
  ChapZigzagLine,
  ChapZigzagGroupTwo,
} from "./ChapIntroElements";

function HideShowcontent() {
  return (
    <>
      <ChapP2>Introduction to Light</ChapP2>
      <ChapHorizontalLine src={horizontalLine} alt="" />
      <ChapZigzagLine src={zigzagLine} alt="" />
      <ChapZigzagGroup>
        <ChapZigzagCircle src={zigzagCircle} alt="" />
        <ChapZigzagCircle src={zigzagCircle} alt="" />
        <ChapZigzagCircle src={zigzagCircle} alt="" />
        <ChapZigzagCircle src={zigzagCircle} alt="" />
      </ChapZigzagGroup>
      <ChapZigzagGroupTwo>
        <ChapP3>Light</ChapP3>
        <ChapP3>Important Facts</ChapP3>
        <ChapP3>Types of Sources of light</ChapP3>
        <ChapP3>Luminious and non luminous</ChapP3>
      </ChapZigzagGroupTwo>
    </>
  );
}

export default HideShowcontent;
