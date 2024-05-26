import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="header">
                <span>My Website</span>
                <Link className="link" to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About Us</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;