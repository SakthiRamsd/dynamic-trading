import React from "react";
import "./SectionThree.css";
import BrandNameImage from "../assets/brandName-image.png";
import heroImage from "../assets/hero-img2.png";

function SectionThree() {
  return (
    <>
      <div className="three-container">
        <div className="three-left">
          <img src={BrandNameImage} />

          <h2>Start Trading And Get More Benifits</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>

          <div className="three-btn">
            <a href="#">Start Trading</a>
          </div>
        </div>

        <div className="three-right">
          <div className="three-img">
            <img src={heroImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
