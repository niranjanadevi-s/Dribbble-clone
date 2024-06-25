import image1 from "../../assets/image/image1"
import React, { useState } from 'react';

import DesignerCard from '../DesignerCardcomponents/DesignerCard';
import ImageModal from '../ImageModalcomponents/ImageModal';
import './Gallery.css';

const designerData = [
  { image: image1, title: 'Draw the lines poster', designer: 'Davor', likes: 1, views: 18, pro: true },
  { image: 'src/assets/image/image2.png', title: 'Build Not Bough', designer: 'Movink Graphic Studio', likes: 0, views: 65, pro: true },
  { image: 'src/assets/image/image3.png', title: 'June Typeface duos', designer: 'Vasil Enev', likes: 6, views: 381, pro: true },
  { image: 'src/assets/image/image4.jpg', title: 'MAD BOT', designer: 'Davor', likes: 1, views: 131, pro: true },
  { image: 'src/assets/image/image5.png', title: 'Horrors of WWII', designer: 'Davor', likes: 1, views: 108, pro: true },
  { image: 'src/assets/image/image6.png', title: 'Upscale images with AI', designer: 'Wix Studio', likes: 0, views: 0, pro: false },
  { image: 'src/assets/image/image7.png', title: 'Fashion Week', designer: 'Caraka', likes: 105, views: 14500, pro: false },
  { image: 'src/assets/image/image8.png', title: 'Modern Art', designer: 'Alice', likes: 45, views: 1050, pro: false },
  { image: 'src/assets/image/image9.png', title: 'Retro Poster', designer: 'Bob', likes: 30, views: 800, pro: true },
  { image: 'src/assets/image/image10.png', title: 'Urban Sketch', designer: 'Charlie', likes: 22, views: 900, pro: false },
  { image: 'src/assets/image/image11.jpg', title: 'Nature Photography', designer: 'Daisy', likes: 55, views: 1200, pro: true },
  { image: 'src/assets/image/image12.jpg', title: 'Abstract Art', designer: 'Eve', likes: 75, views: 1350, pro: false },
  { image: 'src/assets/image/image13.jpg', title: 'Graphic Design', designer: 'Frank', likes: 40, views: 950, pro: true },
  { image: 'src/assets/image/image14.jpg', title: 'Minimalist Poster', designer: 'Grace', likes: 60, views: 1150, pro: false },
  { image: 'src/assets/image/image15.png', title: 'Vintage Poster', designer: 'Hank', likes: 35, views: 750, pro: true },
  { image: 'src/assets/image/image16.png', title: 'Pop Art', designer: 'Ivy', likes: 50, views: 1250, pro: false },
  { image: 'src/assets/image/image17.png', title: 'Digital Illustration', designer: 'Jack', likes: 65, views: 1300, pro: true },
  { image: 'src/assets/image/image18.jpg', title: 'Watercolor Painting', designer: 'Kate', likes: 70, views: 1400, pro: false },
  { image: 'src/assets/image/image19.jpg', title: 'Typography Design', designer: 'Leo', likes: 25, views: 650, pro: true },
  { image: 'src/assets/image/image20.png', title: 'Concept Art', designer: 'Mona', likes: 85, views: 1500, pro: false }

];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  

  return (
    <div className="gallery">
      {designerData.map((data, index) => (
        <DesignerCard
          key={index}
          image={data.image}
          title={data.title}
          designer={data.designer}
          likes={data.likes}
          views={data.views}
          pro={data.pro}
          onClick={() => handleImageClick(data.image)}
        />
      ))}
      {selectedImage && <ImageModal image={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default Gallery;