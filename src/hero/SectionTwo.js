import React from 'react'
import "./SectionTwo.css"
import heroImage from '../assets/hero-img1.png'
import BrandNameImage from '../assets/brandName-image.png'

function SectionTwo() {
  return (
    <>
      <div className='two-container'>
      
          <div className='two-left'>
            <img src={heroImage} width={680}/>
          </div>

          <div className='two-right'>
            <img src={BrandNameImage}/>

            <h2>Trading and Investment Solution Build in Modern Platform</h2>

            <p><b>Fundamental Research</b> Lorem Ipsum has been industry's standard dummy text since the 1500s.</p>
            <p><b>Trading Ideas & Reports</b> Lorem Ipsum has been industry's standard dummy text since the 1500s.</p>
            <p><b>Knowledge center</b> Lorem Ipsum has been industry's standard dummy text since the 1500s.</p>
          </div>

      </div>
    </>
  )
}

export default SectionTwo