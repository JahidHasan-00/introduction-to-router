import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    console.log(post);
    const {id, userId, title} = post;

    const postStyle = {
        border: '3px solid #559e83',
        padding: '10px',
        borderRadius: '20px',
        background: '#b8dbd3'
    }

    return (
        <div style={postStyle}>
            <h2>Post of id: {id}</h2>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>Post Detail</Link>
            <Link><button>Click Me</button></Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;