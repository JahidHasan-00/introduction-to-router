import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="header">
                <span>My Website</span>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/users">Users</Link>
                <Link className="link" to="/posts">Posts</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/about">About Us</Link>
            </nav>
        </div>
    );
};

export default Header;