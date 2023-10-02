
import React, {useState, useEffect} from "react";
import ProductsList from "../Pages/ProductsList"
import Countries from "../Pages/Countries";
const Products = ()=>{
    const [products, setProducts]=useState([])
    const [countries, setCountries]=useState([])

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
  
//    feach landen 
    useEffect(() => {
        fetchCountries();
    }, [])

    const fetchCountries = () => {
        axios.get('/api/products/duisland')
            .then(({data}) => {
                setCountries(data)

            })
    }

    const Filter = (event) => {
        setProducts(products.filter(f => f.country.name.toLowerCase().includes(event.target.value)))

    }

    const showNL = (id)=>{

        const updatedProducts = products.filter(product=> product.country_id == product.country.id);
        setProducts(updatedProducts)
    }

  
    return(

        <div>                  
            
      {/* <Countries products={products} countries={countries} name="Products List" showNL={showNL} Filter={Filter} /> */}

        <ProductsList products={products} countries={countries} name="Products List" showNL={showNL} Filter={Filter} />
        </div>

    );

}
export default Products;



