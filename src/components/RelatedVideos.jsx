import PropTypes from 'prop-types';
import '../styles/RelatedVideos.css';

const RelatedVideos = ({ relatedVideos }) => {
  return (
    <section id="relacionados" className="related-videos">
      <h3>Vídeos Relacionados</h3>
      <div className="related-items">
        {relatedVideos.map((video, index) => (
          <div key={index} className="related-item">
            <img src={video.thumbnail} alt={video.title} />
            <p className="video-title">{video.title}</p>
            <p className="author">{video.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

RelatedVideos.propTypes = {
  relatedVideos: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RelatedVideos;
