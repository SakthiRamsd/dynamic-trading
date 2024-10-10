import React from 'react'
import './SectionFour.css'
import BrandNameImage from '../assets/brandName-image.png'
import heroImage from '../assets/hero-img3.png'

function SectionFour() {
  return (
    <>
      <div className='four-container'>
      
          <div className='four-left'>
            <img src={heroImage}/>
          </div>

          <div className='four-right'>
            <img src={BrandNameImage}/>

            <h2>Why Coode Dynamic!</h2>

            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <div className='four-list'>
            <ul>
                <li>Safty Comes First</li>
                <li>Bonus & Referrel</li>
                <li>Low Charges</li>
            </ul>
            <ul>
                <li>Fast Transactions</li>
                <li>Easy Deposit & Withdrawls</li>
                <li>24/7 Support</li>
            </ul>
        </div>

        </div>
      </div>
    </>
  )
}

export default SectionFour