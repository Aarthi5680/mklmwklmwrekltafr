import React, { useState } from 'react';
import '../App.css';

const VideoPlayer = () => {
  const videos = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4', // Children's video
    
   
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const playVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <div className="video-player-container">
      <h2 className="title">Latest Video</h2>
      <div className="video-container">
        <video
          key={currentVideo}
          controls
          autoPlay
          className="main-video"
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="thumbnail-container">
        {videos.map((video, index) => (
          <div key={index} className="thumbnail" onClick={() => playVideo(video)}>
            <video className="thumbnail-video">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Video {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
