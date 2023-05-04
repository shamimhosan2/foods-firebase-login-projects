import React from 'react';
import './Home.css'
import Recepi from '../Recipi/Recepi';
import Footer from '../Footer/Footer';
import Chef from '../Chef/Chef';

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
            <Chef></Chef>
           </div>
           <div>
             <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;