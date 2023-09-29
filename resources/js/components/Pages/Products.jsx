
import React, {useState, useEffect} from "react";
import ProductsList from "../Pages/ProductsList"
import Countries from "../Pages/Countries";
const Products = ()=>{
    const [products, setProducts]=useState([])
    const [countries, setCountries]=useState([])
    const [productsCountry, setProductsCountry]=useState([])
 
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
      // feach products 
      useEffect(() => {
        fetchProductsCpuntry();
    }, [])

    const fetchProductsCpuntry = ()=> {
        axios.get('/api/products_country/')
            .then(({data}) => {
                setProductsCountry(data)
                console.log(data);

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

   

    const showNL = (id)=>{

        const updatedProducts = products.filter(product=> product.country_id == 1);
        setProducts(updatedProducts)
    }


    const landFilter = (id)=>{

        const updatedProducts = products.filter(post=> post.id !=country_id);
        setProducts(updatedProducts)
    }
  
    return(

        <div>

{/* <Countries products={products} countries={countries} name="Products List"  productsCountry={productsCountry}deleteAction={deleteAction} landFilter={landFilter}/> */}

        <ProductsList products={products} countries={countries} name="Products List"  productsCountry={productsCountry}showNL={showNL} landFilter={landFilter}/>
        </div>

    );

}
export default Products;



