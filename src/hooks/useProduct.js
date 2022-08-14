
import { useEffect, useState } from "react";

const useProduct = () =>{

    const [products, setProducts] = useState([]);
// console.log(tools);
    useEffect(()=>{
        fetch(`https://taja-jinis.herokuapp.com/products`)
        // fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
            // console.log(data);
        });
    } , [])


    return [products, setProducts];
}
export default useProduct;