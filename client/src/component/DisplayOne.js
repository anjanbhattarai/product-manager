import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

function DisplayOne(props) {
    
    const {id} =  useParams();
    const [dispalyOneProduct, setDisplayOneProduct] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log(res);
            console.log(res.data);
            setDisplayOneProduct(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [id]);
    
    return (
    <div className="displayId">
            <h2>{dispalyOneProduct.title}</h2>
            <br/>
            <p>Price: ${dispalyOneProduct.price}</p>
            <br/>
            <p>Description: {dispalyOneProduct.description}</p>
    </div>
    )
}

export default DisplayOne;