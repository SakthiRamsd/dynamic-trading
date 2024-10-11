import React, { useState } from 'react';
import './SectionEight.css';
import BrandNameImage from '../assets/brandName-image.png'
import { TiTick } from "react-icons/ti";

const SectionEight = () => {
 
  return (
    <>
    <section className="eight-section">

      <div className='eight-header'>
      <img src={BrandNameImage}/>
      <h2>Get More Benefits With Subscription</h2>
      </div>
      <div className="eight-toggle">
        <label>
          Monthly
        </label>
        <label>
          Yearly
        </label>
      </div>
      <div className="eight-container">
        <div className="eight-card">
          <h3>Basic Plan</h3>
          <p className="price">₹ 00<span>/monthly</span></p>
          <ul>
            <li><TiTick size={25} color='skyblue'/>Lorem Ipsum is simply dummy text.</li>
            <li><TiTick size={25} color='skyblue'/>It is a long established fact that a reader.</li>
            <li><TiTick size={25} color='skyblue'/>The point of using Lorem Ipsum.</li>
            <li><TiTick size={25} color='skyblue'/>it was popularised in 1960s with relese.</li>
            <li><TiTick size={25} color='skyblue'/>software like PageMaker includig versions.</li>
          </ul>
          <a href='#'>Continue With Basic</a>
        </div>
        <div className="eight-card">
          <h3>Standard Plan</h3>
          <p className="price">₹ 800<span>/monthly</span></p>
          <ul>
            <li><TiTick size={25} color='skyblue'/>Lorem Ipsum is simply dummy text.</li>
            <li><TiTick size={25} color='skyblue'/>It is a long established fact that a reader.</li>
            <li><TiTick size={25} color='skyblue'/>The point of using Lorem Ipsum.</li>
            <li><TiTick size={25} color='skyblue'/>it was popularised in 1960s with relese.</li>
            <li><TiTick size={25} color='skyblue'/>software like PageMaker includig versions.</li>
          </ul>
          <a href='#'>Continue With Standard</a>
        </div>
        <div className="eight-card">
          <h3>Premium Plan</h3>
          <p className="price">₹ 1200<span>/monthly</span></p>
          <ul>
            <li><TiTick size={25} color='skyblue'/>Lorem Ipsum is simply dummy text.</li>
            <li><TiTick size={25} color='skyblue'/>It is a long established fact that a reader.</li>
            <li><TiTick size={25} color='skyblue'/>The point of using Lorem Ipsum.</li>
            <li><TiTick size={25} color='skyblue'/>it was popularised in 1960s with relese.</li>
            <li><TiTick size={25} color='skyblue'/>software like PageMaker includig versions.</li>
          </ul>
          <a href='#'>Continue With Premium</a>
        </div>
      </div>
    </section>
    </>
  );
};

export default SectionEight;
