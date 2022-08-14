
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const useProduct = () =>{

    const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading ] = useState(true);
    
// console.log(tools);

// useEffect(()=>{
//     async function Data() {
//         const fetchData = await fetch(
//           "https://taja-jinis.herokuapp.com/products"
//         );
//         const res = await fetchData.json();
//         console.log(res);
//         setProducts(res)
//         // setIsLoading(false)
//     }
//     Data()
// }, [])

    useEffect(()=>{
        
        // setIsLoading(true);
        fetch(`https://taja-jinis.herokuapp.com/products`)
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