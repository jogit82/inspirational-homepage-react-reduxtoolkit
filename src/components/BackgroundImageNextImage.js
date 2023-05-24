import React from "react";
import { useDispatch } from "react-redux";
import { switchToNextBackgroundImage } from "../features/backgroundImage/backgroundImageSlice";

const BackgroundImageNextImage = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Switch to next background image"
      onClick={() => {
        dispatch(switchToNextBackgroundImage());
      }}
    >
      {">"}
    </button>
  );
};

export default BackgroundImageNextImage;
