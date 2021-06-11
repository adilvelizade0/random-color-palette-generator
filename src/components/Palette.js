import React from "react";
import {
  ColorDiv,
  GenerateBtn,
  MainDiv,
  NotifyDiv,
  PaletteDiv,
} from "../style/style";
import Clipboard from "react-clipboard.js";
import "animate.css";

window.addEventListener("keypress", (e) => {
  if (e.keyCode === 32) {
    setStateHexCode();
  }
});

let setStateHexCode;

export const Palette = () => {
  const [colors, setColors] = React.useState([
    "9b3010",
    "b3db38",
    "d197c9",
    "68afa9",
    "4d230d",
  ]);

  const [currentHexCode, setCurrentHexCode] = React.useState("");

  const randomHexCode = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  setStateHexCode = () => {
    let arr = [];
    for (let i = 0; i <= 4; i++) {
      arr.push(randomHexCode());
    }
    setColors(arr);
  };

  const onSuccess = (e) => {
    const notification = document.querySelector(".notification_div");
    setCurrentHexCode(e.trigger.textContent);
    notification.style.display = "flex";
    setTimeout(() => {
      notification.style.display = "none";
    }, 1500);
  };

  const getText = (e) => {
    return "#" + e.textContent;
  };

  return (
    <>
      <MainDiv>
        <NotifyDiv className="notification_div animate__animated animate__bounceInDown">
          <p>
            Color <b>{currentHexCode}</b> copied to your clipboard
          </p>
        </NotifyDiv>
        {colors.map((color, index) => (
          <Clipboard
            className="clipboard_div"
            option-text={getText}
            key={index}
            onSuccess={onSuccess}
          >
            <PaletteDiv className="palette">
              <ColorDiv color={"#" + color} />
              <span>{color.toUpperCase()}</span>
            </PaletteDiv>
          </Clipboard>
        ))}

        <GenerateBtn onClick={setStateHexCode}>Generate palette</GenerateBtn>
        <p className="btn-info">
          Or just press the “Spacebar” to generate new palettes.
        </p>
      </MainDiv>
    </>
  );
};
