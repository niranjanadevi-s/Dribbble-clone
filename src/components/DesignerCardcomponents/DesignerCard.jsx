
import React from 'react';
import './DesignerCard.css';

const DesignerCard = ({ image, title, designerName, pro, likes, views, onClick }) => {
  return (
    <div className="designer-card" onClick={onClick}>
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-overlay">
          <div className="card-title">{title}</div>
        </div>
      </div>
      <div className="card-info">
        <div className="designer-info">
          <div className="designer-name">{designerName}</div>
          <div className="title">{title}</div> {/* Display title here */}
          {pro && <div className="pro-badge">PRO</div>}
        </div>
        <div className="card-stats">
          <div className="stat-item">
            <div className="icon-heart"></div>
            {likes}
          </div>
          <div className="stat-item">
            <div className="icon-eye"></div>
            {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;