import React, { useState, useEffect } from 'react';
import './ImageSearch.css';

const ImageSearch = ({ query, tag }) => {
  const [images, setImages] = useState([]);
  const [likedImages, setLikedImages] = useState([]);
  const [likesCount, setLikesCount] = useState({});

  useEffect(() => {
    let searchQuery = query;
    if (tag) {
      searchQuery = `${query} ${tag}`;
    }

    if (searchQuery) {
      fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=YOUR_UNSPLASH_ACCESS_KEY`)
        .then((response) => response.json())
        .then((data) => {
          setImages(data.results);
          // Initialize likes count for each image to 0
          const initialLikesCount = {};
          data.results.forEach((image) => {
            initialLikesCount[image.id] = 0;
          });
          setLikesCount(initialLikesCount);
        })
        .catch((error) => console.error('Error fetching images:', error));
    }
  }, [query, tag]);

  const handleLike = (id) => {
    const likedIndex = likedImages.indexOf(id);
    if (likedIndex === -1) {
      setLikedImages([...likedImages, id]);
      setLikesCount((prevCount) => ({
        ...prevCount,
        [id]: prevCount[id] + 1,
      }));
    } else {
      const updatedLikedImages = likedImages.filter((imageId) => imageId !== id);
      setLikedImages(updatedLikedImages);
      setLikesCount((prevCount) => ({
        ...prevCount,
        [id]: prevCount[id] - 1,
      }));
    }
  };

  return (
    <div className="image-search-results">
      {images.map((image) => (
        <div key={image.id} className="image-container">
          <img src={image.urls.small} alt={image.description} className="searched-image" />
          <button
            onClick={() => handleLike(image.id)}
            className={likedImages.includes(image.id) ? 'like-btn liked' : 'like-btn'}
            style={{ backgroundColor: likedImages.includes(image.id) ? 'pink' : '' }}
          >
            {likedImages.includes(image.id) ? 'Liked ❤️' : 'Like'}
          </button>
          <span className="likes-count">{likesCount[image.id]}</span>
        </div>
      ))}
    </div>
  );
};

export default ImageSearch;
