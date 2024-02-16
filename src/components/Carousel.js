import React from 'react';

const Carousel = () => {
  const images = [
    'person-front-computer-working-html.jpg',
    'person-front-computer-working-html.jpg',
    'clement-helardot-95YRwf6CNw8-unsplash.jpg'
  ];

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
            <img src={`/assets/${image}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
