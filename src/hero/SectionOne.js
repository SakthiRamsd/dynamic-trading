import React from "react";
import "./SectionOne.css";
import BrandNameImage from "../assets/brandName-image.png";
import BannerImage from "../assets/banner-img1.png";

function SectionOne() {
  return (
    <>
      <div className="one-container">
        <div className="one-left">
          <img src={BrandNameImage} />

          <h2>Start Trading In Few Steps</h2>
          <div className="one-btn">
            <a href="#">Start Trading</a>
          </div>
        </div>

        <div className="one-right">
          <div className="one-box-left">
            <div className="one-box-container">
              <div className="one-box-img">
                <img src={BannerImage} />
              </div>

              <div className="one-box-content">
                <h6>Create Account</h6>
                <p>Sign Up Your Email and Mobile in Just 5 Minutes.</p>
              </div>
            </div>
            <div className="one-box-container">
              <div className="one-box-img">
                <img src={BannerImage} />
              </div>

              <div className="one-box-content">
                <h6>Add Fund In Wallet</h6>
                <p>Quickly Add Money to Your Investment Wallet.</p>
              </div>
            </div>
          </div>

          <div className="one-box-right">
            <div className="one-box-container">
              <div className="one-box-img">
                <img src={BannerImage} />
              </div>

              <div className="one-box-content">
                <h6>Verify Your Bank</h6>
                <p>Verify Your Bank Account in Easy Way.</p>
              </div>
            </div>
            <div className="one-box-container">
              <div className="one-box-img">
                <img src={BannerImage} />
              </div>

              <div className="one-box-content">
                <h6>Start trading Instantly</h6>
                <p>Buy & Sell Variety of Top Coins At The Bset Prices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
