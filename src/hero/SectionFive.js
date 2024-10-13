import React from "react";
import "./SectionFive.css";
import BrandNameImage from "../assets/brandName-image.png";
import heroImage from "../assets/hero-img4.png";

function SectionFive() {
  return (
    <>
      <div className="five-container">
        <div className="five-left">
          <img src={BrandNameImage} />

          <h2>Refer and Earn Big Rewards</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>

          <div className="five-btn">
            <a href="#">Refer Now</a>
          </div>
        </div>

        <div className="five-right">
          <div className="five-img">
            <img src={heroImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFive;
