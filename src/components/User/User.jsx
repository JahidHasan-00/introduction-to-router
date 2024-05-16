import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const User = ({user}) => {

    const {id, name, email, phone} = user;
    // console.log(user);

    const userStyle = {
        border: '3px solid orange',
        padding: '10px',
        borderRadius: '20px',
        background: 'lightgray'
    }
    const hoverStyle = {
        background: 'red'
    }
    return (
        <div style={userStyle} className={{hover:`${hoverStyle}`}}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;