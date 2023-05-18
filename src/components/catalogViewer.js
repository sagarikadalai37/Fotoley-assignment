import React, { useState, useEffect } from "react";
import details from "../assets/details";

const CatalogViewer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, images.length]);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="mainId">
      <div id="leftSide">
        <img
          src={images[currentIndex]}
          alt={`pic-${currentIndex + 1}`}
          id="img"
        />
        <div id="catalogDiv">
          <p className="button" onClick={handlePrevious}>
            ⏮
          </p>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              style={{
                filter: currentIndex === index ? "none" : "grayscale(100%)"
              }}
              id="catalogimg"
            />
          ))}
          <p className="button" onClick={handleNext}>
            ⏭
          </p>
        </div>
      </div>
      <div id="rightSide">
        <h1>{details[currentIndex].headline}</h1>
        <p id="details">{details[currentIndex].details}</p>
        <button onClick={() => setIsPlaying(!isPlaying)} id="play_pause">
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>
    </div>
  );
};

export default CatalogViewer;
