import PropTypes from 'prop-types';
import '../styles/Comments.css';

const Comments = ({ comments }) => {
  return (
    <section id="comentarios" className="comments-section">
      <h3>Comentários dos Usuários</h3>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p><strong>{comment.name}</strong> - {comment.date}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </section>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Comments;