import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2>This Is Home {user && <span>{user.email}</span>}.</h2>            
        </div>
    );
};

export default Home;