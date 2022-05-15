import React, {useState, useEffect} from 'react';
import Product from "../component/Product";
import Display from "../component/Display";

function Main(props) {
    const [productList, setProductList] = useState([])

    return (
    <div>
        <Product productList= {productList} setProductList={setProductList}/>
        <Display productList= {productList} setProductList={setProductList}/>

    </div>
    )
}

export default Main;