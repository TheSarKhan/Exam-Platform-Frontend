import { useState } from "react";
import "./VideoCard.css";
import playButton from "../../assets/icons/play-button.png";
function VideoCard({ title, description, youtubeId, img }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <div className="video-card">
      <div className="video-card__video">
        {isPlaying ? (
          <iframe className="video-card__video-iframe" src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={title}></iframe>
        ) : (
          <div className="video-thumbnail-container" onClick={handlePlayClick}>
            <img className="video-thumbnail" src={img} alt="Video thumbnail" />
            {console.log(img)}
            <div className="play-overlay">
              <img src={playButton} alt="playButton" />
            </div>
          </div>
        )}
      </div>
      <p className="video-card__text">{description}</p>
      <button className="video-card__button">{title}</button>
    </div>
  );
}

export default VideoCard;
