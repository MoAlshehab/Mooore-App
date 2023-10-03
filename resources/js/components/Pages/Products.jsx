
import React, {useState, useEffect} from "react";
import ProductsList from "../Pages/ProductsList"
import Countries from "../Pages/Countries";
const Products = ()=>{
    const [countries, setCountries]=useState([])
    const [products, setProducts]=useState([])

    const changeStock = (e) => {
        setProducts({...products, [e.target.stock]: e.target.value})
    }
console.log("products",products);
   
    const updateStock = (id) => {
        axios.post(`/api/products/edit/${products.id}`, {
            stock: products.stock,
        }, 
            
        )
    }

    useEffect(() => {
        fetchProduct();
    }, []) 

    const fetchProduct= ()=> {
        axios.get('/api/products')
            .then(({data}) => {
                setProducts(data)

            })
    }

//    feach  all products 
    useEffect(() => {
        fetchProducts();
    }, []) 

    const fetchProducts = ()=> {
        axios.get('/api/products/all')
            .then(({data}) => {
                setCountries(data)

            })
    }
  
//    feach landen 
    useEffect(() => {
        fetchDu();
    }, [])

    const fetchDu = () => {
        axios.get('/api/products/duisland')
            .then(({data}) => {
                setCountries(data)

            })
    }
    useEffect(() => {
        fetchNl();
    }, [])

    const fetchNl = () => {
        axios.get('/api/products/nederland')
            .then(({data}) => {
                setCountries(data)

            })
    }
    useEffect(() => {
        fetchEn();
    }, [])

  
    const fetchEn = () => {
        axios.get('/api/products/engeland')
            .then(({data}) => {
                setCountries(data)

            })
    }
    useEffect(() => {
        fetchUn();
    }, [])

    const fetchUn = () => {
        axios.get('/api/products/unknown')
            .then(({data}) => {
                setCountries(data)

            })
    }

    const Filter = (event) => {
        setCountries(countries.filter(f => f.country.name.toLowerCase().includes(event.target.value)))

    }

    return(

        <div>                  
            
    {/* <Countries products={products} countries={countries}  fetchCountriesNl={fetchCountriesNl}fetchCountries={fetchCountries} name="Products List" showNL={showNL} Filter={Filter} /> */}

        <ProductsList countries={countries} updateStock={updateStock} changeStock={changeStock}fetchEn={fetchEn} fetchProducts={fetchProducts} fetchUn={fetchUn} fetchNl={fetchNl} fetchDu={fetchDu}name="Products List"  Filter={Filter} />
        </div>

    );

}
export default Products;



