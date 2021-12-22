import React from 'react';
import './Search.css';
import Footer from './Footer'
const Profile = () => {
    let params = new URLSearchParams(window.location.search);
    let data = JSON.parse(params.get('data'));
    return (
        <div>
           {JSON.stringify(data)}
        </div>
    )
}

export default Profile;