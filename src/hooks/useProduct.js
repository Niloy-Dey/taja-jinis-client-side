
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const useProduct = () =>{

    const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading ] = useState(true);
    

    useEffect(()=>{
        
        // setIsLoading(true);
        fetch(`https://taja-jinis-server.vercel.app/products`)
        // fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
            // setIsLoading(false);
            // console.log(data);
        });
    } , [])


    return [products, setProducts];
}
export default useProduct;