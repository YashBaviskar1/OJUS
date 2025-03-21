import React, { useEffect, useRef, useState } from 'react';
import './index.css'; // Add your styles in this file
import { Link } from "react-router-dom";
import OjusLogo from '../assets/logo.ico';
import drc from '../assets/dark_rider-character.webp';
import drtitle from '../assets/dark_rider-title.png';
import frcover from '../assets/force_mage-cover.jpg';
import frc from '../assets/force_mage-character.webp';
import frtitle from '../assets/force_mage-title.png';
import cultural from "../assets/CULTURALLOGO2025.png";
import sports from "../assets/OJUS SPORTS 2024 FINAL_r6.png"
import img from '../assets/img.jpg';
// import video from '../assets/sports1.mp4';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';


const Index = () => {
  const [activeSlider, setActiveSlider] = useState(3);
  const page2Ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const elems = document.querySelectorAll('.elem');
    const firstElem = elems[0];
    const bgVideo = firstElem.getAttribute('data-video');

    if (bgVideo && page2Ref.current) {
      const existingVideo = page2Ref.current.querySelector('video');
      if (existingVideo) {
        existingVideo.pause();
        existingVideo.remove();
      }

      const videoElement = document.createElement('video');
      videoElement.src = `${bgVideo}?v=${new Date().getTime()}`; // Cache-busting
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.setAttribute('playsinline', true);
      videoElement.setAttribute('preload', 'auto');
      videoElement.style.position = 'absolute';
      videoElement.style.top = '0';
      videoElement.style.left = '0';
      videoElement.style.width = '100%';
      videoElement.style.height = '100%';
      videoElement.style.objectFit = 'cover';
      videoElement.style.zIndex = '-1';

      // Remove autoplay attribute
      videoRef.current = videoElement;
      page2Ref.current.appendChild(videoElement);
    }
  }, []);

  const handleSliderClick = (index) => {
    setActiveSlider(index);
  };

  const handleSportsClick = () => {
  const videoUrl = "https://res.cloudinary.com/dfkkdv8et/video/upload/v1741932632/sports1_cmaini.mp4";
    if (videoRef.current) {
      if (videoRef.current.src !== videoUrl) {
        videoRef.current.src = videoUrl; // Change video source
        videoRef.current.load(); // Reload the video
      }
      videoRef.current.onloadeddata = () => {
        videoRef.current.play(); // Auto-play when video loads
        setIsVideoPlaying(true); // Update state
      };
      if (!isVideoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleCulturalClick = () => {
    const videoUrl = "https://res.cloudinary.com/dth2rinzf/video/upload/cultural-vid_njabmn.mp4";
  
    if (videoRef.current) {
      if (videoRef.current.src !== videoUrl) {
        videoRef.current.src = videoUrl; // Change video source
        videoRef.current.load(); // Reload the video
      }
      videoRef.current.onloadeddata = () => {
        videoRef.current.play(); // Auto-play when video loads
        setIsVideoPlaying(true); // Update state
      };
      if (!isVideoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };
  



  return (
    <div id="main">
      <div id="nav1">
        <img src={OjusLogo} width="120" height="120" alt="Ojus Logo" />

        {/* Buttons for Larger Screens */}
        <div className="nav-buttons">
          <button className="button">
            <div className="dots_border" />
            <Link to="/council">
              <span className="text_button">Council</span>
            </Link>
          </button>
          <button className="button">
            <div className="dots_border" />
            <Link to="/heads">
              <span className="text_button">Heads</span>
            </Link>
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Full-Screen Sliding Menu for Mobile */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <button className="button">
            <div className="dots_border" />
            <Link to="/council">
              <span className="text_button">Council</span>
            </Link>
          </button>
          <button className="button">
            <div className="dots_border" />
            <Link to="/heads">
              <span className="text_button">Heads</span>
            </Link>
          </button>
        </div>
      </div>

      <div id="page1">
        <div className="container">
          {/* <div className="left">
            <p>OJUS - 2k25</p>
          </div> */}
          {/* <div className="bottom">
            <p>OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25</p>
          </div> */}
          <div className="image">

            <a href="/sports">
              <div className="card">
                <div className="wrapper">
                  <img src="https://res.cloudinary.com/dfkkdv8et/image/upload/v1741980223/Ojus2025FinalLogo_oonqat.png" className="cover-image" alt="Dark Rider Cover" />
                </div>
              </div>
            </a>
            <a href='https://ojus-culturals.vercel.app/'>
              <div className="card">
                <div className="wrapper">
                  <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741949234/dept%20logos/gpvbcq3qo44x9f1uo3hb.png" className="cover-image" alt="Dark Rider Cover" />
                </div>
              </div>
            </a>
          </div>
          {/* <div className="right">
            <p>OJUS - 2k25</p>
          </div> */}
          {/* <div className="top">
            <p>OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25</p>
          </div> */}
        </div>
      </div>

      <div id="page2" ref={page2Ref}>
        {/*         <div className="elem">
          <h2>Festivals</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Click Me</h5>
            </div>
          </div>
        </div> */}

        <div className="elem" data-video="https://res.cloudinary.com/dfkkdv8et/video/upload/v1741932632/sports1_cmaini.mp4">
          <h2 onClick={handleSportsClick} style={{ cursor: 'pointer' }}>
            Sports
          </h2>
        </div>
        <div className="elem" data-video="https://res.cloudinary.com/dth2rinzf/video/upload/cultural-vid_njabmn.mp4">
          <h2 onClick={handleCulturalClick} style={{ cursor : 'pointer' }}>
            Culturals 
            </h2>
        </div>

        {/*         <div className="elem" data-video={video}>
          <h2>Cultural</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
            </div>
          </div>
        </div> */}
        {/* 
        <div className="elem" data-video="./val.mp4">
          <h2>Ghanekar</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
            </div>
          </div>
        </div> */}
      </div>

      <div id="page3">
        <MDBContainer fluid style={{ padding: '80px' }}>
          <MDBRow>
            {/* Column 1 */}
            <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/dth2rinzf/image/upload/v1742421463/img2_zz82ol.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
 
            </MDBCol>

            {/* Column 2 */}
            <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/dth2rinzf/image/upload/v1742421108/img_ild8wt.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />

            </MDBCol>

            {/* Column 3 */}
            <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/dth2rinzf/image/upload/v1742423464/img6_j8jznx.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

            </MDBCol>
          </MDBRow>
              {/* ADDITIONAL ROW WITH 3 MORE IMAGES */}
    <MDBRow>
      {/* Column 4 */}
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src="https://res.cloudinary.com/dth2rinzf/image/upload/v1742423463/img4_eakcpj.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="New Image 1"
        />
      </MDBCol>

      {/* Column 5 */}
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src="https://res.cloudinary.com/dth2rinzf/image/upload/v1742421463/img3_rnqagt.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="New Image 2"
        />
      </MDBCol>

      {/* Column 6 */}
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src="https://res.cloudinary.com/dth2rinzf/image/upload/v1742423463/img5_tyzdbq.jpg"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="New Image 3"
        />
      </MDBCol>
    </MDBRow>
        </MDBContainer>
      </div>

      <footer className="footer">
        <div className="text-center p-3">
          <h7 className="text-body">
            <a href="https://ojus-web-dev.vercel.app/" style={{ textDecoration: 'none', color: 'white' }} >OJUS WebDev 2k25❤</a>
          </h7>
        </div>
      </footer>
    </div>
  );
};

export default Index;
