import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    } 

    return (
        <nav className="navbar bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-xl">Auth Master</Link>
            <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to="/orders" className="btn btn-ghost normal-case text-xl">Orders</Link>
            {user && <Link to="/profile" className="btn btn-ghost normal-case text-xl">Profile</Link>}
            <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
            <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
            {
                user ? <div>
                    <span className='text-white text-xl font-medium'>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-sm ms-4">Sign Out</button>
                </div> :
                <Link to="/login">Login</Link>
            }
        </nav>
    );
};

export default Header;