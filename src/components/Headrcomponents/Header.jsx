import React, { useState } from 'react';
import './Header.css';
import pic from '../../assets/image/pic.png';
import prof from '../../assets/image/prof.png';
import ImageSearch from '../Imagecomponents/ImageSearch';

const ColorPicker = ({ onColorChange }) => {
  const handleColorChange = (e) => {
    onColorChange(e.target.value);
  };

  return (
    <input 
      type="color" 
      onChange={handleColorChange} 
      className="color-picker" 
    />
  );
};

const Header = () => {
  const [isFollowingDropdownOpen, setIsFollowingDropdownOpen] = useState(false);
  const [isDesignersDropdownOpen, setIsDesignersDropdownOpen] = useState(false);
  const [isFiltersDropdownOpen, setIsFiltersDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [tagFilter, setTagFilter] = useState(''); // Add tag filter state

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const toggleFollowingDropdown = () => {
    setIsFollowingDropdownOpen(!isFollowingDropdownOpen);
  };

  const toggleDesignersDropdown = () => {
    setIsDesignersDropdownOpen(!isDesignersDropdownOpen);
  };

  const toggleFiltersDropdown = () => {
    setIsFiltersDropdownOpen(!isFiltersDropdownOpen);
  };

  const toggleColorPicker = () => {
    setIsColorPickerVisible(!isColorPickerVisible);
  };

  const handleDropdownClick = (option) => {
    console.log(`Selected: ${option}`);
    setIsFollowingDropdownOpen(false);
    setIsDesignersDropdownOpen(false);
    setIsCoursesDropdownOpen(false);
    setIsFiltersDropdownOpen(false);
  };

  const clearColor = () => {
    setColor('');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTagFilterChange = (e) => {
    setTagFilter(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-top">
        <nav className="main-nav">
          <ul>
            <li className="dropdown designers-dropdown">
              <button className="dropdown-btn" onClick={toggleDesignersDropdown}>
                Find Designers <span className="arrow-down"></span>
              </button>
              {isDesignersDropdownOpen && (
                <div className="dropdown-menu">
                  <ul className="dropdown-menu-items">
                    <b><li onClick={() => handleDropdownClick('Designer Search')}>Designer Search</li></b>
                    <li onClick={() => handleDropdownClick('Quickly find your next designer')}>Quickly find your next designer</li><br></br>
                    <b><li onClick={() => handleDropdownClick('Post Search')}>Post Search</li></b>
                    <li onClick={() => handleDropdownClick('The #1 job board for design talent')}>The #1 job board for design talent</li>
                  </ul>
                </div>
              )}
            </li>

            <li><a href="#">Inspiration</a></li>
            <li className="dropdown courses-dropdown">
              <button className="dropdown-btn" onClick={toggleCoursesDropdown}>
                Courses <span className="arrow-down"></span>
              </button>
              {isCoursesDropdownOpen && (
                <div className="dropdown-menu">
                  <ul className="dropdown-menu-items">
                    <b><li onClick={() => handleDropdownClick('UX Diploma')}>UX Diploma</li></b>
                    <li onClick={() => handleDropdownClick('Learn UX design from scratch to 6 months')}>Learn UX design from scratch to 6 months</li><br></br>
                    <b><li onClick={() => handleDropdownClick('UI Certificate')}>UI Certificate</li></b>
                    <li onClick={() => handleDropdownClick('12 week UI skills building for designers')}>12 week UI skills building for designers</li><br></br>
                    <b><li onClick={() => handleDropdownClick('Live Interactive workshops')}>Live Interactive workshops</li></b>
                    <li onClick={() => handleDropdownClick('with design professionals')}>with design professionals</li>
                  </ul>
                </div>
              )}
            </li>

            <li><a href="#">Jobs</a></li>
            <li><a href="#">Go Pro</a></li>
          </ul>
        </nav>
        <div className="logo">
          <img src={pic} alt="pic" />
        </div>
        <div className="search-and-filters">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input" 
            value={searchQuery}
            onChange={handleSearchChange} 
          />
          <div className="logo">
            <img src={prof} alt="prof" />
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <nav className="sub-nav">
          <ul>
            <li className="dropdown following-dropdown">
              <button className="dropdown-btn" onClick={toggleFollowingDropdown}>
                Following <span className="arrow-down"></span>
              </button>
              {isFollowingDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">Following</div>
                  <div className="dropdown-item">Popular</div>
                  <div className="dropdown-item">New & Noteworthy</div>
                </div>
              )}
            </li>
            <li><button className="discover-btn">Discover</button></li>
            <li><a href="#">Animation</a></li>
            <li><a href="#">Branding</a></li>
            <li><a href="#">Illustration</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Print</a></li>
            <li><a href="#">Product Design</a></li>
            <li><a href="#">Typography</a></li>
            <li><a href="#">Web Design</a></li>
            <li className="dropdown filters-dropdown">
              <button className="filters-btn" onClick={toggleFiltersDropdown}>
                <span className="filters-icon"></span> Filters
              </button>
            </li>
          </ul>
        </nav>
        {isFiltersDropdownOpen && (
          <div className="filters-section">
            <div className="filter-section tags-section">
              <label>Tags</label>
              <input 
                type="text" 
                placeholder="Enter tags..." 
                className="filter-search-input" 
                value={tagFilter}
                onChange={handleTagFilterChange} 
              />
            </div>
            <div className="filter-section color-section">
              <label>Color</label>
              <div className="color-input-container">
                <input 
                  type="text" 
                  placeholder="Enter hex or select" 
                  className="filter-color-input" 
                  value={color} 
                  onChange={(e) => setColor(e.target.value)} 
                />
                <div 
                  className="color-picker-icon" 
                  onClick={toggleColorPicker}
                ></div>
                <button 
                  className="clear-color-btn" 
                  onClick={clearColor}
                >
                  Clear
                </button>
                {isColorPickerVisible && (
                  <ColorPicker 
                    onColorChange={(newColor) => {
                      setColor(newColor);
                      setIsColorPickerVisible(false);
                    }} 
                  />
                )}
              </div>
            </div>
           
          </div>
        )}
      </div>
      <ImageSearch query={searchQuery} tag={tagFilter} /> {/* Add tag filter as a prop */}
    </header>
  );
};

export default Header;
