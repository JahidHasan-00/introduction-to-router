import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '3px solid #559e83',
        padding: '10px',
        borderRadius: '20px',
        background: '#b8dbd3'
    }
    const handleShowDetail = () =>{
        navigate(`/posts/${id}`);
    }

    return (
        <div style={postStyle}>
            <h2>Post of id: {id}</h2>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>Post Detail</Link>
            {/* <Link to={`/posts/${id}`}><button>Click Me</button></Link> */}
            <button onClick={handleShowDetail}>Show Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;