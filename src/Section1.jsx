import React from "react";
import "./sectionfront.css";

import Navbar from "./Navbar";
import image1 from "./images/Star1.png"
import imageStar from "./images/Star3.png"
import imageHero from "./images/hero.png"

const Section1 = () => {
  return (
    <>
      <div className="container1">
        <div className="container2">
          <h1>ShopKart</h1>

          <div className="star1">
          <img src={image1} alt="hero" />
          </div>
          <div className="wishlsit">
            <h3>WISHLIST (0)</h3>
            <h3>BAG (0)</h3>
          </div>
          <hr></hr>
        </div>
        <div>
          <Navbar />
        </div>
        <div className="main">
          <div className="Orange">
            <h1>Fresh</h1>
            <h1>2022</h1>
            <h1>Look</h1>
            <div className="img">
              <img className="starCircle" src={imageStar} alt="" />                
              <img className="hero" src={imageHero} alt="" />                
            </div>
          </div>
            <button>See More</button>
        </div>
      </div>
    </>
  );
};

export default Section1;
