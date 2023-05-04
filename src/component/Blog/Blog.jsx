import React from 'react';
import './Blog.css'
import Footer from '../Footer/Footer';
const Blog = () => {
    return (
        <div>
           <h2 className='text-center '>Bonus Question Answer</h2>
           <div className='container'>
            <h2>1. what is tell us different between uncontrolled and control componern ?</h2>
            <p className='main-color'>In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state</p>
           </div>
           <div className='container '>
            <h2>2. How to validate react props using propstype?</h2>
            <p className='main-color'>PropTypes.any : The prop can be of any data type. <br />
            PropTypes.bool : The prop should be a Boolean. <br />
            PropTypes.number : The prop should be a number. <br />
            PropTypes.string : The prop should be a string. <br />
            PropTypes.func : The prop should be a function. <br />
             PropTypes.array : The prop should be an array.</p>
           </div>
           <div className='container '>
            <h1>3. What is tell us the diffferents between nodejs and expressjs?</h1>
            <p className='main-color'>NodeJS is the broader option and is suitable for most kinds of applications. On the other hand Express. JS is suitable for product owners, CEOs, and CTOs, looking to build an MVP to test product-market fit. We have covered many aspects of Express JS and Node JS, but the latter is obviously the most powerful of the two</p>
           </div>
           <div  className='container '>
            <h3>4. Add active "route" to indicate the route which your visiting?</h3>
            <p className='main-color'>The Command route print prints the list of All Interfaces and the IPv4/v6 Routing Table. It is followed by a comma-delimited argument, which describes the command to run (e: -f). If there are no arguments then it reports all installed ports for each configured interface; if not supplied this would report only the ones present on that port range. </p>
           </div>
           <div className='footerss'>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Blog;
