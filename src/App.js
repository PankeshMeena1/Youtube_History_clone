import React, { useState } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoEllipsisVerticalCircleSharp } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaMicrophone, FaSearch, FaBars,FaRegTrashAlt,FaPauseCircle,FaCog,FaComments,FaFileAlt } from "react-icons/fa";
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="app">
      <div className="app-nav">
        <button className="app-nav-button">
          <FaBars fontSize={"30px"} />
        </button>
        <div className="app-nav-logo">
          <img src="https://www.youtube.com/favicon.ico" alt="YouTube Logo" />
          <span>YouTube</span>
        </div>
        <div className="app-nav-search">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search"
          />
          <button className="app-nav-button" onClick={handleClearSearch}>
            <FaSearch fontSize={"27px"} />
          </button>
          <button className="app-nav-button">
            <FaMicrophone fontSize={"27px"} />
          </button>
        </div>
        <div className="app-nav-right">
          <div className='Notificationicon'>
          <button className="app-nav-button1">
            <MdVideoCall fontSize={"30px"} />
          </button>
          <button className="app-nav-button1">
            <IoMdNotificationsOutline fontSize={"30px"}/>
            <span className="app-nav-notification">9+</span>
          </button>
          </div>
          <button className="app-nav-button">
            <img src="https://yt3.googleusercontent.com/j5J0wVWPdvaZZuGk9FKz0cHkfvxLvXlrkOIUhinJb99T_mStkFENaCCrqnJBvfDBTUDeISyOXA=s160-c-k-c0x00ffffff-no-rj" alt="Profile Picture" />
          </button>
        </div>
      </div>

      <div className="app-content">
        <div className="app-content-sidebar">
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">Home</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">Shorts</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">Subscriptions</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">You</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">Your channel</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">History</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">Playlists</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">Your videos</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">Watch later</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">Liked videos</a>
          </div>
          <div className="app-content-sidebar-title">Subscriptions</div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">NoCopyrightSou... (++)</a>
          </div>
          <div className="app-content-sidebar-item">
            <a href="/" className="app-content-sidebar-link">Apna College</a>
          </div>
        </div>

        <div className="app-content-main">
          <div className="app-content-main-title">
            <h2>Watch history</h2>
            <div className="app-content-main-title-today">Today</div>
          </div>

          <div className="app-content-main-videos">
            <div className="app-content-main-video">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0rhoIIptssEeNHdL61ZOgg-8u-6TvTdA-g&s" alt="Video Thumbnail" />
              <div className="app-content-main-video-info">
                <div className="app-content-main-video-title">
                  SQL - Complete Course in 3
                  Hours | SQL One Shot using...
                </div>
                <div className="app-content-main-video-channel">
                  Apna College <i className="fas fa-check-circle"></i> 6.4M views
                </div>
                <div className="app-content-main-video-description">
                  You can join the NEW Web Development batch using the below link.
                  <i className="fas fa-fire-alt"></i> Delta 3.0(Full Stack Web Development) :...
                </div>
              </div>
              <div className="app-content-main-video-actions">
                <button className="app-content-main-video-action">
                  <IoTimeOutline fontSize={"20px"} color='white' />
                </button>
                <button className="app-content-main-video-action">
                  <IoEllipsisVerticalCircleSharp fontSize={"20px"} color='white' />
                </button>
              </div>
            </div>

            <div className="app-content-main-video">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMQOZv4I7mstCY_lpIie5Q_Wr6MWLstHklQ&s" />
              <div className="app-content-main-video-info">
                <div className="app-content-main-video-title">
                  NodeJs and MySQL CRUD
                  operation in Hindi | Step by Step
                </div>
                <div className="app-content-main-video-channel">
                  What About Coding. 9.5K views
                </div>
                <div className="app-content-main-video-description">
                  Hi Guys, In this video, I have explained step-by-step how you can
                  create a full stack application using nodejs, express js, SQL, HTM...
                </div>
              </div>
              <div className="app-content-main-video-actions">
                <button className="app-content-main-video-action">
                  <IoTimeOutline fontSize={"20px"} color='white' />
                </button>
                <button className="app-content-main-video-action">
                  <IoEllipsisVerticalCircleSharp fontSize={"20px"} color='white' />
                </button>
              </div>
            </div>

            <div className="app-content-main-video">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQACN1ZvRpzrFw_6vDw3e8urNOz1r22oam7g&s" alt="Video Thumbnail" />
              <div className="app-content-main-video-info">
                <div className="app-content-main-video-title">
                  Node JS MySQL Tutorials #1 |
                  How To Connect Node To MySQ...
                </div>
                <div className="app-content-main-video-channel">
                  What About Coding. 9.5K views
                </div>
                <div className="app-content-main-video-description">
                  Hi Guys, In this video, I have explained step-by-step how you can
                  create a full stack application using nodejs, express js, SQL, HTM...
                </div>
              </div>
              <div className="app-content-main-video-actions">
                <button className="app-content-main-video-action">
                  <IoTimeOutline fontSize={"20px"} color='white' />
                </button>
                <button className="app-content-main-video-action">
                  <IoEllipsisVerticalCircleSharp fontSize={"20px"} color='white' />
                </button>
              </div>
            </div>
            <div className="app-content-main-video">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0rhoIIptssEeNHdL61ZOgg-8u-6TvTdA-g&s" alt="Video Thumbnail" />
              <div className="app-content-main-video-info">
                <div className="app-content-main-video-title">
                  SQL - Complete Course in 3
                  Hours | SQL One Shot using...
                </div>
                <div className="app-content-main-video-channel">
                  Apna College <i className="fas fa-check-circle"></i> 6.4M views
                </div>
                <div className="app-content-main-video-description">
                  You can join the NEW Web Development batch using the below link.
                  <i className="fas fa-fire-alt"></i> Delta 3.0(Full Stack Web Development) :...
                </div>
              </div>
              <div className="app-content-main-video-actions">
                <button className="app-content-main-video-action">
                  <IoTimeOutline fontSize={"20px"} color='white' />
                </button>
                <button className="app-content-main-video-action">
                  <IoEllipsisVerticalCircleSharp fontSize={"20px"} color='white' />
                </button>
              </div>
            </div>
            <div className="app-content-main-video">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmfsc-XSP-ZCgcDJuSbdM1fE7S-8htr1_Bw&s" alt="Video Thumbnail" />
              <div className="app-content-main-video-info">
                <div className="app-content-main-video-title">
                  SQL - Complete Course in 3
                  Hours | SQL One Shot using...
                </div>
                <div className="app-content-main-video-channel">
                  Apna College <i className="fas fa-check-circle"></i> 6.4M views
                </div>
                <div className="app-content-main-video-description">
                  You can join the NEW Web Development batch using the below link.
                  <i className="fas fa-fire-alt"></i> Delta 3.0(Full Stack Web Development) :...
                </div>
              </div>
              <div className="app-content-main-video-actions">
                <button className="app-content-main-video-action">
                  <IoTimeOutline fontSize={"20px"} color='white' />
                </button>
                <button className="app-content-main-video-action">
                  <IoEllipsisVerticalCircleSharp fontSize={"20px"} color='white' />
                </button>
              </div>
            </div>
            <div className="app-content-main-video">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IhiiUD-IZ_lYbjTvf9dffufcBmpQFKu3dA&s" alt="Video Thumbnail" />
              <div className="app-content-main-video-info">
                <div className="app-content-main-video-title">
                  SQL - Complete Course in 3
                  Hours | SQL One Shot using...
                </div>
                <div className="app-content-main-video-channel">
                  Apna College <i className="fas fa-check-circle"></i> 6.4M views
                </div>
                <div className="app-content-main-video-description">
                  You can join the NEW Web Development batch using the below link.
                  <i className="fas fa-fire-alt"></i> Delta 3.0(Full Stack Web Development) :...
                </div>
              </div>
              <div className="app-content-main-video-actions">
                <button className="app-content-main-video-action">
                  <IoTimeOutline fontSize={"20px"} color='white' />
                </button>
                <button className="app-content-main-video-action">
                  <IoEllipsisVerticalCircleSharp fontSize={"20px"} color='white' />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="app-content-sidebar">
          <div className="app-content-sidebar-item">
            <button className="app-content-sidebar-button">
            <FaRegTrashAlt  fontSize={"20px"}/> Clear all watch history
            </button>
          </div>
          <div className="app-content-sidebar-item">
            <button className="app-content-sidebar-button">
            <FaPauseCircle fontSize={"20px"}/> Pause watch history
            </button>
          </div>
          <div className="app-content-sidebar-item">
            <button className="app-content-sidebar-button">
            <FaCog  fontSize={"20px"}/>  Manage all history
            </button>
          </div>
          <div className="app-content-sidebar-title">More</div>
          <div className="app-content-sidebar-item">
            <button className="app-content-sidebar-button">
            <FaComments fontSize={"20px"}/> Comments
            </button>
          </div>
          <div className="app-content-sidebar-item">
            <button className="app-content-sidebar-button">
            <FaFileAlt fontSize={"20px"}/>Posts
            </button>
          </div>
          <div className="app-content-sidebar-item">
            <button className="app-content-sidebar-button">
            <FaComments fontSize={"20px"}/>Live chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
