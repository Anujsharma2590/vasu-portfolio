import React, { useState, useEffect } from "react";
import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Gallery.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
        const response = await axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${apiKey}&user_id=200556703%40N03&format=json&nojsoncallback=1`
        );
        setPhotos(response.data.photos.photo);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Photo Gallery</h2>{" "}
      <div className="img-container">
        <Carousel
          autoPlay={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          dynamicHeight={true}
        >
          {photos.map((photo) => (
            <div key={photo.id}>
              <img
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.title}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <span>
        Do you want to see more?
        <b>
          <a
            href="https://www.flickr.com/photos/200556703@N03/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <u>Click</u>
          </a>
        </b>
      </span>
    </section>
  );
};

export default Gallery;
