import PropTypes from 'prop-types';
import '../styles/VideoDetails.css';

const VideoDetails = ({ videoSrc, title, author, description }) => {
  return (
    <section id="video" className="video-details">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-info">
        <h2>{title}</h2>
        <p>Autor: {author}</p>
        <div className="video-menu">
          <button>Curtir</button>
          <button>Compartilhar</button>
          <button>Salvar</button>
          <button>Denunciar</button>
        </div>
        <p className="description">{description}</p>
      </div>
    </section>
  );
};

VideoDetails.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default VideoDetails;