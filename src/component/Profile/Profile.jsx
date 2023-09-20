import React from 'react';
import './Profile.css'
import Footer from '../Footer/Footer';
import prothom from "/public/images/istockphoto-1438969575-170667a (1).jpg"
import ditio from "/public/images/istockphoto-1388645967-170667a.jpg" 
import titio from "/public/images/istockphoto-1399565382-170667a.jpg"
import ford from "/public/images/istockphoto-1400280368-170667a.jpg"
import fith from "/public/images/istockphoto-1437931505-170667a.jpg" 
import sixth from "/public/images/istockphoto1111111111111a (1).jpg"
import seven from "/public/images/istockphot).jpg"
import eight from "/public/images/istockphoto-2222270667a.jpg"
import nine from "/public/images/blogg_5-295x172.jpg"
const Profile = () => {
    return (
        <div>
            <h1 className='text-center'>Choice Your Profile</h1>
            <div className='container imgs'>
                <div className='imagess container'>
                    <div>  
                      <img src={prothom} alt="" /> 
                    </div>
                        <div>
                        <img src={ditio} alt="" /> 
                        </div>
                   <div>
                       <img src={titio} alt="" /> 
                   </div>
                  <div>
                  <img src={ford} alt="" /> 
                  </div>
                  <div>
                     <img src={ fith} alt="" /> 
                  </div>
                    <div>
                      <img src={sixth} alt="" /> 
                    </div>
                    <div>
                       <img src={seven} alt="" /> 
                    </div>
                   <div>

                   <img src={eight} alt="" /> 
                   </div>
                   <div>
                   <img src={nine} alt="" /> 
                   </div>
                </div>
            </div>
            <div className='footerss'>
             <Footer></Footer>
           </div>
        </div>
    );
};

export default Profile;