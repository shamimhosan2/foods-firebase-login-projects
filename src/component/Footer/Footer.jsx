import React from 'react';
import './Footer.css'
import { FaCaretRight } from 'react-icons/fa';
import {FcGoogle } from 'react-icons/fc';
import {BsFacebook } from 'react-icons/Bs';
import {BsInstagram } from 'react-icons/Bs';
import {TiSocialInstagram } from 'react-icons/Ti';
const Footer = () => {
    return (
        <div>
              <div className='main-footer'>
            <footer className='recepi-footer container'>
                <div>
                    <h3>About</h3>
                    <p>Cras at ultrices erat, sed vulputate . <br />
                    Nunc at augue gravida est <br />vulputate. Pellentesque et ipsum in  <br />malesuada fermentum  tempus.</p>
                    <div className='icons'>
                            <div>
                              <h2> <p><FcGoogle></FcGoogle></p></h2>
                            </div>
                            <div>
                                <h2><p><BsFacebook></BsFacebook></p></h2>
                            </div>
                            <div>
                                <h2><p><BsInstagram></BsInstagram></p> </h2>
                            </div>
                            <div>
                                <h2><p><TiSocialInstagram></TiSocialInstagram></p></h2>
                            </div>
                    </div>
                </div>
                <div>
                    <h3>Archives</h3>
                    <p><FaCaretRight></FaCaretRight>June 2014</p>
                    <p> <FaCaretRight></FaCaretRight>July 2014</p>
                    <p><FaCaretRight></FaCaretRight>August 2014</p>
                    <p><FaCaretRight></FaCaretRight>Septembar 2014</p>
                    <p><FaCaretRight></FaCaretRight>Novembar 2014</p>
                </div>
                <div>
                    <h3>Recipes</h3>
                    <p><FaCaretRight></FaCaretRight>Browaw Recipes</p>   
                     <p><FaCaretRight></FaCaretRight>Recipe Page </p>
                     <p><FaCaretRight></FaCaretRight>Submit Recipe</p>
                </div>
                <div>
                    <h3>Newsletter</h3>
                    <p>Sign up to receive email updates on new product announcements, <br />gift ideas, sales and more.</p>
                    <nav class="navbar bg-body-tertiary">
                   <div className="container-fluid">
                   
                 <form className="d-flex" role="search">
                        <input type="text" pattern='' placeholder='mail@example.com' />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                       </form>
                  </div>
                 </nav>
                </div>
            </footer>
          </div>
          <div className='copyright'>
                <div className='container new'>
                    <p> Copyright 2014 by Chow. All Rights Reserved.</p>
                </div>
          </div>
        </div>
    );
};

export default Footer;