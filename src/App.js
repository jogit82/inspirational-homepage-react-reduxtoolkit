import React from "react";
import "./App.css";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote";
import Error from "./features/error/Error";
import BackgroundImageNextImage from "./components/BackgroundImageNextImage";
import BackgroundImagePreviousImage from "./components/BackgroundImagePreviousImage";
import Journal from "./features/journal/Journal";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header>
        <Error />
        <Weather />
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <BackgroundImagePreviousImage />
      </aside>
      <main>
        <Journal />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageNextImage />
      </aside>
      <footer>
        <Quote />
      </footer>
    </div>
  );
}

export default App;
