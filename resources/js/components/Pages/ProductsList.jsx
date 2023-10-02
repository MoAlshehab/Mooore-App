import Home from "./Home"
import React, {useState, useEffect} from "react";

const ProductsList=({products,name,showNL,countries,Filter})=> {
    const [showForm, setShowForm] = useState(false);
    const [showFilter, setShowFilter] = useState(false);


    const toggle = () => {
        setShowForm(!showForm);
    }
    const landToggle= () => {
        setShowFilter(!showFilter);
    }
 
console.log("landen",countries);
console.log("products",products);
    
    return(

        <div>

            <input onChange={Filter}></input>
            <h1 className=" text-center font-bold p-7">{name}</h1>
            
            {!showFilter ?  <label  onClick={landToggle} type="button" name="make" htmlFor="country_name">Filter</label> :  <label  onClick={landToggle}  name="make" htmlFor="country_name">X</label>}

{showFilter ? <div className=" text-center text-lg bg-red-600">

<td className=" bg-zinc-950">
    <input  type="checkbox" value="" />
    <label >Nederland</label>
</td>
<td className=" m-8 ">
    <input  type="checkbox" value="" />
    <label >Duitsland</label>
</td>
<td>
    <input  type="checkbox" value="" />
    <label >Engeland</label>
</td>
<td>
    <input  type="checkbox" value="" />
    <label >Onbekend</label>
</td>
<td>
    <input  type="checkbox" value="" />
    <label>All</label>
</td> 
</div>:""}

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
                    <td>    
                    {!showForm ?  <button  onClick={toggle}  name="make" htmlFor="btn-check-outlined">Edit stock</button> :
                        <button  onClick={toggle}  name="make" htmlFor="btn-check-outlined">Save</button>}

           </td>
                     
                    </tr>

                ))}

                </tbody>
            </table>
        </div>
        
    );
}
export default ProductsList;