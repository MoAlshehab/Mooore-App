import Home from "./Home"
import React, {useState, useEffect} from "react";

const ProductsList=({products,name,deleteAction,countries})=> {
    const [showForm, setShowForm] = useState(false);
    const [input, setInput] = useState("");
    const changeInput = (e) => {
        if (!e.target.value) {
            // setInputError("Vul aub een waarde in");
        } else {
            setInputError(null);
        }
        setInput(e.target.value);
    }

    const toggle = () => {
        setShowForm(!showForm);
    }
console.log("landen",countries);
console.log("products",products);

    
    return(

        <div >
            <div className="main-container border border-collapse">
            <h1 className=" text-center font-bold p-7">{name}</h1>
                           
  { countries.map((country)=>(
    
    <tr key={country.id}>
    <div className="navigation ">
    <h1 className=" font-semibold text-gray-500 m-6"><th>{country.name}</th></h1>
        {/* <td>{country.country_code}</td> */}
        </div>
    </tr>

))}
            </div>
            <div className="list">
            <table className="table">
                <thead>
                    
                <tr>
                    <th scope="col">Brand</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Location</th>
                    <th scope="col">Stocks</th>
                    <th scope="col">Edit</th>

                </tr>
                </thead>
                <tbody>
                  
                {products.map((post)=>(
                    <tr key={post.id}>
                        <td>{post.brand}</td>
                        <td>{post.type}</td>
                        <td>{post.description}</td>
                        <td>{post.location}</td>
                        <td>{post.stock}</td>
                        <td> <button onClick={() => deleteAction(post.id)} >Edit</button></td>
                        <input onClick={toggle}  className=" font-semibold"  id="btn-check-outlined"/>
                        <label  name="make" htmlFor="btn-check-outlined">edit stock</label>
            {showForm ?   <input type="text" 
                            value={input}
                              onChange={changeInput} required/> : ""}
                     
                    </tr>

                ))}

                </tbody>
            </table>
        </div>
        </div>
    );
}
export default ProductsList;