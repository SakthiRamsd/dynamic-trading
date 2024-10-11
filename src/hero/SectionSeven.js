import React from 'react';
import './SectionSeven.css';
import BrandNameImage from '../assets/brandName-image.png'
import heroImage from '../assets/hero-img3.png'

const testimonials = [
  {
    quote: 'Buying crypto was never so easy',
    desc: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    author: 'John Watson',
    location: 'New York, USA',
  },
  {
    quote: 'Buying crypto was never so easy',
    desc: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    author: 'John Watson',
    location: 'New York, USA',
  },
];

const SectionSeven = () => {
  return (
    <>
    <section className="seven-section">

      <div className='seven-header'>
        <div className='seven-brand-img'>
            <img src={BrandNameImage}/>
        </div>
      <h2>See Our Seticified Users Says About Dynamic!</h2>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
      </div>

      <div className="seven-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="seven-card">
            <h6>"{testimonial.quote}"</h6>
            <p>"{testimonial.desc}"</p>
            <div className="seven-author">
              <img src={heroImage}/>
              <div>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default SectionSeven;
