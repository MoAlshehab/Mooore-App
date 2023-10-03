import React, {useState} from "react";
import '../../../css/app.css';
import { Link } from 'react-router-dom';



const ProductsList=({name,changeStock,updateStock,fetchNl,fetchEn,countries,fetchDu,fetchUn,fetchProducts,Filter})=> {
    const [showForm, setShowForm] = useState(false);
    const [showFilter, setShowFilter] = useState(false);


    const toggle = () => {
        setShowForm(!showForm);
    }
    const landToggle= () => {
        setShowFilter(!showFilter);
    }
 
console.log("landen",countries);
    
    return(

        <div>
            <input onChange={Filter}></input>
            <h1 className=" text-center font-bold p-7">{name}</h1>
         
            
            {!showFilter ?  <label  className=" font-bold text-5xl m-9" onClick={landToggle} type="button" name="make" htmlFor="country_name">Filter</label> :  <label  onClick={landToggle}  name="make" htmlFor="country_name">X</label>}

{showFilter ? <div className=" bg-red-800 m-11 p-10">

<td className="">
    <label   onClick={fetchNl} className=" bg-red-500" >Nederland</label>
</td>
<td className=" m-8 ">
    <label onClick={fetchDu}  className="p-10">Duitsland</label>
</td>
<td>
    <label onClick={fetchEn} className=" m-10" >Engeland</label>
</td>
<td>
    <label  onClick={fetchUn}>Onbekend</label>
</td>
<td>
    <label onClick={fetchProducts} >All</label>
</td> 
</div>:""}

            <table className=" bg-red-900 table-column">
                <thead>    
                <tr >
                    
                <th >Country</th>
                     <th>Brand</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Stocks</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody className=" bg-red-900">
                {countries.map((product)=>(
                    <tr key={product.id}>
                      <td>{product.country.name}</td>
                        <td>{product.brand}</td>
                        <td>{product.type}</td>
                        <td>{product.description}</td>
                        <td>{product.location}</td>
                        {showForm ? <input onChange={changeStock} required/> :<td>{product.stock}</td>}
                    <td>    
                    {!showForm ?  <button  onClick={toggle}  name="make" htmlFor="btn-check-outlined">Edit stock</button> :
                        <button  onClick={updateStock}  name="make" htmlFor="btn-check-outlined">Save</button>}

           </td>
                     
                    </tr>

                ))}

                </tbody>
            </table>
        </div>
        
    );
}
export default ProductsList;