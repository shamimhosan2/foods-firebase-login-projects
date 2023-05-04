import React, { useEffect, useState } from 'react';

const Chef = () => {
    const [chef, setChef] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/chef`)
        .then(res =>res.json())
        .then(data => setChef(data))
    },[])
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default Chef;