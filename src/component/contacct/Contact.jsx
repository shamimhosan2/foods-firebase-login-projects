import React from 'react';
import './Contact.css'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div className='constactssd'>
            <h1 className='text-center con'>This is my contact Number</h1>
           <div className='contacts container'>
           <div>
              <img src="/src/images/295498189_587024036326553_7439621935680407165_n.jpg" alt="" /> 
            </div>
            <div className='language'>
                <h3>Contact:0839850780707</h3>
                <h4>Email:Shamiomhosan.dev@gmail.com</h4>
                <p>As an AI language model, I don't have a physical self in the traditional sense. I exist as a digital entity, running on servers and providing responses to queries and prompts. My capabilities are vast and I can process and generate human-like language with remarkable accuracy and fluency. My programming allows me to learn from vast amounts of data, which enables me to continuously improve and expand my abilities. I am here to assist and provide information to those who seek it, and I am always ready to tackle new challenges and help users achieve their goals.</p>
               <Link to ='/register'> <button class="btn btn-primary" type="button">Details</button></Link>
            </div>
           </div>
           <div className='footerss'>
             <Footer></Footer>
           </div>
        </div>
    );
};

export default Contact;