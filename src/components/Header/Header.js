import React from 'react';
import logo from '../../images/car_logo_PNG1640.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
          <div className=" logo-text text-center">
            <img className='logo' src={logo} alt="" />
            <h1>Audi cars Lovers Hut</h1>
            </div> 
            <div className="site-intro">
                <div className="text-center site-intro-text">
                    <h1>Welcome Audi lovers</h1>
                    <h1>You can choose your most favourite Audi cars By limited budget</h1>
                    <h1>Budget Limit:$10M</h1>
                </div>
            </div> 
        </div>
    );
};

export default Header;