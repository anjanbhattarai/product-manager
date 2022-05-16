import React, {useState, useEffect} from 'react';
import {useParams, Link, useNavigate} from "react-router-dom";
import axios from 'axios';

function DisplayOne(props) {
    
    const {id} =  useParams();
    const [dispalyOneProduct, setDisplayOneProduct] = useState({})
    const navigate= useNavigate();

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
    
    const deleteFilter = () =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res =>{
            console.log(res.data);
            navigate("/")
        })
        .catch (err =>{
            console.log(err);
        })
    }

    return (
    <div className="displayId">
            <h2>{dispalyOneProduct.title}</h2>
            <br/>
            <p>Price: ${dispalyOneProduct.price}</p>
            <br/>
            <p>Description: {dispalyOneProduct.description}</p>
            <button className='deleteButton' onClick={deleteFilter}>Delete</button>
            <br/>
            <Link to= {"/"} >Go Home </Link>
            
    </div>
    )
}

export default DisplayOne;