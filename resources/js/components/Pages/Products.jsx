
import React, {useState, useEffect} from "react";
import ProductsList from "../Pages/ProductsList"
const Products = ()=>{
    const [products, setProducts]=useState([])
    const [countries, setCountries]=useState([])
    console.log("moooo",products);

   // feach products 
    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = ()=> {
        axios.get('/api/products/')
            .then(({data}) => {
                setProducts(data)

            })
    }
   // feach landen 
    useEffect(() => {
        fetchCountries();
    }, [])

    const fetchCountries = () => {
        axios.get('/api/country/')
            .then(({data}) => {
                setCountries(data)

            })
    }

   

    const deleteAction = (id)=>{

        const updatedProducts = products.filter(post=> post.id !=id);
        setProducts(updatedProducts)
    }


    const landFilter = (id)=>{

        const updatedProducts = products.filter(post=> post.id !=country_id);
        setProducts(updatedProducts)
    }
  
    return(

        <div>
        <ProductsList products={products}  countries={countries} name="Products List" deleteAction={deleteAction} landFilter={landFilter}/>
        </div>

    );

}
export default Products;



