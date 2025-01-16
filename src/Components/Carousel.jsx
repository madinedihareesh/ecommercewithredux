import React from 'react';
import heroImage from '../assets/images/hero-img.png'
import heroPhone from '../assets/images/phone-08.png'
import heroWireless from '../assets/images/wireless-01.png'
import heroWatch from '../assets/images/watch-07.png'

export default function Carousel() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide bg-light" data-bs-ride="carousel">
      {/* Carousel Inner */}
      <div className="carousel-inner">
        <div className="carousel-item active">
            <div className='d-flex gap-3 align-items-center justify-content-center'>
            <div className='text-start' style={{width:300}}>
                <h1>50% off For Your First Shopping</h1>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt quaerat explicabo rerum reiciendis</p>
                <h6 style={{backgroundColor:'gray', width:150}} className='text'>Visit Collections</h6>
            </div>
          <img src={heroImage} className="d-block w-50 " alt="First Slide" />
          </div>
         </div>
        <div className="carousel-item">
        <div className='d-flex gap-3 align-items-center justify-content-center'>
            <div className='text-start' style={{width:300}}>
                <h1>50% off For Your First Shopping</h1>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt quaerat explicabo rerum reiciendis</p>
                <h6 style={{backgroundColor:'gray', width:150}} className='text'>Visit Collections</h6>
            </div>
          <img src={heroPhone} className="d-block w-40 " alt="First Slide" />
          </div>
       </div>
        <div className="carousel-item">
        <div className='d-flex gap-3 align-items-center justify-content-center'>
            <div className='text-start' style={{width:300}}>
                <h1>50% off For Your First Shopping</h1>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt quaerat explicabo rerum reiciendis</p>
                <h6 style={{backgroundColor:'gray', width:150}} className='text'>Visit Collections</h6>
            </div>
          <img src={heroWireless} className="d-block w-45 " alt="First Slide" />
          </div>
        </div>
        <div className="carousel-item">
        <div className='d-flex gap-3 align-items-center justify-content-center'>
            <div className='text-start' style={{width:300}}>
                <h1>50% off For Your First Shopping</h1>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt quaerat explicabo rerum reiciendis</p>
                <h6 style={{backgroundColor:'gray', width:150}} className='text'>Visit Collections</h6>
            </div>
          <img src={heroWatch} className="d-block w-40 " alt="First Slide" />
          </div>
        </div>
      </div>
    </div>
  );
}
