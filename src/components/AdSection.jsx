import PropTypes from 'prop-types';
import '../styles/AdSection.css';

const AdSection = ({ adImage, adTitle, adDescription, adLink }) => {
  return (
    <section id="propaganda" className="ad-section">
      <div className="ad-container">
        <img src={adImage} alt="Propaganda" className="ad-image" />
        <div className="ad-info">
          <h3>{adTitle}</h3>
          <p>{adDescription}</p>
          <a href={adLink}>Visite nossa loja</a>
        </div>
      </div>
    </section>
  );
};

AdSection.propTypes = {
  adImage: PropTypes.string.isRequired,
  adTitle: PropTypes.string.isRequired,
  adDescription: PropTypes.string.isRequired,
  adLink: PropTypes.string.isRequired,
};

export default AdSection;