import './Slider.scss';
import { useState } from 'react';

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => setImageIndex((imageIndex - 1 + images.length) % images.length)}>
            <img src="/arrow.png" alt="Previous" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => setImageIndex((imageIndex + 1) % images.length)}>
            <img src="/arrow.png" className="right" alt="Next" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} onClick={() => setImageIndex(index + 1)} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
