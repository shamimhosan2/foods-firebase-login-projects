import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Header = () => {
    return (
        <div className='main'>
            <div className='container'>
               <div className="main-container">
                <div className='main-nav'>
                   <h2>BANGLI-RECI<span className='text-warning'>p</span>Y</h2>
                </div>
               <div className='link-add'>
                  <Link to='/'>Home</Link>
                   <Link to='/'>Contact</Link>
                   <Link to='/blog'>Blog</Link>
                </div>
               <div className='btn'>
                   <Button variant="primary">Profile</Button>
                   <Link to='/login'><Button variant="success">Login </Button></Link>
                  
               </div>
             </div>
           </div>
        </div>
    );
};

export default Header;
