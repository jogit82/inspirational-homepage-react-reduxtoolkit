import React from "react";
import { switchToPreviousBackgroundImage } from "../features/backgroundImage/backgroundImageSlice";
import { useDispatch } from "react-redux";

const BackgroundImagePreviousImage = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Previous background image"
      onClick={() => {
        dispatch(switchToPreviousBackgroundImage());
      }}
    >
      {"<"}
    </button>
  );
};

export default BackgroundImagePreviousImage;
