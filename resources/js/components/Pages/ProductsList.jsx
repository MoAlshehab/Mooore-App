import Home from "./Home"
import React, {useState, useEffect} from "react";

const ProductsList=({products,name,showNL,countries,productsCountry,setProducts})=> {
    const [showForm, setShowForm] = useState(false);
    const [showCountry, setShowCountry] = useState(false);
    // const [records, setRecords] = useState(products);


    const toggle = () => {
        setShowForm(!showForm);
    }
    const landToggle= () => {
        setShowCountry(!showCountry);
    }
    const Filter= () => {
        setProducts(products.filter(f = f.brand.toLwerCase().includes(evet.target.value)))

    }
console.log("landen",countries);
console.log("products",products);
console.log("withCountry",productsCountry);

    
    return(

        <div >
            <div className="main-container border border-collapse">
            {!showCountry ?  <label  type="button" name="make" htmlFor="country_name">show Land</label> :  <label  name="make" htmlFor="country_name">Terug</label>}

  { countries.map((country)=>(
    
    <th key={country.id}>
    <div className="navigation bg-red-800">
    <button onClick={landToggle}  className=" font-semibold"  id="country_name"/>
            {showCountry ?    <td> <button className=" text-7xl font-semibold text-gray-500 m-6 p-7">{country.name}</button></td> : ""}

        {/* <td>{country.country_code}</td> */}
        </div>
    </th>

))}
            </div>

            <input onChange={Filter}></input>
            <h1 className=" text-center font-bold p-7">{name}</h1>

            <div className="list">
            <table className="table">
                <thead>    
                <tr>
                <th scope="col">Country</th>

                     <th scope="col">Brand</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Location</th>
                    <th scope="col">Stocks</th>
                    <th scope="col">Edit</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                      <td>{product.country.name}</td>
                        <td>{product.brand}</td>
                        <td>{product.type}</td>
                        <td>{product.description}</td>
                        <td>{product.location}</td>
                        {showForm ? <input  value={product.stock} required/> :<td>{product.stock}</td>}
                        <button onClick={() => showNL(product.country_id)} >Nederland</button>  

                    <td>    
                    {!showForm ?  <button  onClick={toggle}  name="make" htmlFor="btn-check-outlined">Edit stock</button> :
                        <button  onClick={toggle}  name="make" htmlFor="btn-check-outlined">Save</button>}

           </td>
                     
                    </tr>

                ))}

                </tbody>
            </table>
        </div>
        </div>
    );
}
export default ProductsList;