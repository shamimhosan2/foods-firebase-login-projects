import React from 'react';
import './Home.css'
import Recepi from '../Recipi/Recepi';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className='bg-image'>
              <div className='Logo-img'>
                <img src="/src/images/logo_2.png" alt="" /> 
             </div>
          </div>
           <div className='recipy-name'>
              <Recepi></Recepi>
           </div>
           <div>
             <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;