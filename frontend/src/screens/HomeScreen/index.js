import React from "react";

// Assets
import classes from "./HomeScreen.module.css";
import trail from "../../assets/trail.jpg";
import skyline from "../../assets/skyline.jpg";

const HomeScreen = () => {
  return (
    <div className={classes.screen_container}>
      <div className={classes.slide}>
        <div className={classes.greySquare}>
          <h1 className={classes.title}>John Doe</h1>
          <h1 className={classes.title}>Photography</h1>
        </div>
        <img className={classes.slide_image} src={trail} alt="trail" />
      </div>
    </div>
  );
};

export default HomeScreen;
