
import Home from "./Home"
import React, {useState, useEffect} from "react";

const Countries=({products,name,deleteAction,countries,productsCountry})=> {
    const [showForm, setShowForm] = useState(false);
    const [showCountry, setShowCountry] = useState(false);

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
    const landToggle= () => {
        setShowCountry(!showCountry);
    }
console.log("landen",countries);
console.log("products",products);
console.log("withCountry",productsCountry);

    
    return(

        <div >
            <div className="main-container border border-collapse">
            {!showCountry ?  <label  type="button" name="make" htmlFor="country_name">show Land</label> :  <label  name="make" htmlFor="country_name">Terug</label>}

       </div>
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
                {!showCountry ?  <tbody>
                {productsCountry.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.brand}</td>
                        <td>{product.type}</td>
                        <td>{product.description}</td>
                        <td>{product.location}</td>
                        <td>{product.stock}</td>
                        <td> <button onClick={() => deleteAction(post.id)} >Edit</button></td>
                        <input onClick={toggle}  className=" font-semibold"  id="btn-check-outlined"/>
                        <label  name="make" htmlFor="btn-check-outlined">Edit stock</label>
            {showForm ?   <input type="text" 
                            value={input}
                              onChange={changeInput} required/> : ""}
                     
                    </tr>

                ))}

                </tbody>: ""}
            </table>
        </div>
        </div>
    );
}
export default Countries;