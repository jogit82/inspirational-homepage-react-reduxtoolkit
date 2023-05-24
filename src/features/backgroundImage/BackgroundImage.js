import React, { useEffect } from "react";
import {
  getBackgroundImage,
  //selectBackgroundImage,
} from "./backgroundImageSlice";
import { useDispatch, useSelector } from "react-redux";

const BackgroundImage = () => {
  const { imageUrls, currentImageUrlIndex } = useSelector(
    (state) => state.backgroundImage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBackgroundImage());
  }, [dispatch]);

  return (
    <div id="background-image-container">
      <img
        src={imageUrls[currentImageUrlIndex]}
        alt="background image"
        id="background-image"
      />
    </div>
  );
};

export default BackgroundImage;
