import React from 'react'
import './Banner.css'
import BrandNameImage from '../assets/brandName-image.png'
import BannerImage from '../assets/banner-img1.png'

function Banner() {
  return (
   <>
    <div className='banner-container'>

        <div className='banner-left'>
          <img src={BrandNameImage}/>
          <h1>Start Trading In Crypto Instant</h1>
          <p>Join World's Biggest And Tursted Exchange. Trade in BitCoin, Ethereum, Ripple And Many</p>

          <div className='banner-btn'>
            <a href='#' className='start'>Start Trading</a>
            <a href='#' className='download'>Download App</a>
          </div>

        <div className='banner-featured'>
          <h5>Featured Companies</h5>
          <ul>
            <li>Bibox</li>
            <li>MONERO</li>
            <li>bitcoin dummy</li>
            <li>OKEX</li>
          </ul>
        </div>

        </div>

        <div className='banner-right'>
          <img src={BannerImage}/>
        </div>

    </div>
   </>
  )
}

export default Banner