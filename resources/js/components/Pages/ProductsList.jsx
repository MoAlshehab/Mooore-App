import React, { useState, useEffect } from "react";

const ProductsList = ({
  fetchNl,
  fetchEn,
  countries,
  fetchDu,
  fetchUn,
  fetchProducts,
  Filter,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [editedStock, setEditedStock] = useState({});
  const [products, setProducts] = useState([]);

  const toggle = () => {
    setShowForm(!showForm);
  };

  const landToggle = () => {
    setShowFilter(!showFilter);
  };

  const updateStock = (productId) => {
    const updatedStockValue = editedStock[productId];
    axios
      .put(`/api/products/${productId}/update-stock`, { stock: updatedStockValue })
      .then(() => {
        console.log("Stock is successfully updated");
      })
      .catch((error) => {
        console.error("Error updating stock", error);
        // Handle errors
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    axios.get("/api/products").then(({ data }) => {
      setProducts(data);
    });
  };

  return (
    <div>
      <input  className=" bg-red-100"onChange={Filter}></input>
      {showForm ? <input required /> : ""}
      {showForm ? (
        <button onClick={() => setShowForm(!showForm)}>Cancel</button>
      ) : (
        ""
      )}
      <br></br>
      {!showFilter ? (
        <label
          className="font-bold text-5xl mb-10"
          onClick={landToggle}
          type="button"
          name="make"
          htmlFor="country_name"
        >
          Filter
        </label>
      ) : (
        <label onClick={landToggle} name="make" htmlFor="country_name">
          X
        </label>
      )}
      {showFilter ? (
        <div className="text-center">
          <td className="">
            <label onClick={fetchNl} className="bg-red-500">
              Nederland
            </label>
          </td>
          <td className="m-8">
            <label onClick={fetchDu} className="p-10">
              Duitsland
            </label>
          </td>
          <td>
            <label onClick={fetchEn} className="m-10">
              Engeland
            </label>
          </td>
          <td>
            <label onClick={fetchUn}>Onbekend</label>
          </td>
          <td>
            <label onClick={fetchProducts}>All</label>
          </td>
        </div>
      ) : (
        ""
      )}
      <div className="bg-red-900">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Description</th>
              <th>Location</th>
              <th>Stocks</th>
              {!showForm ? <th>Edit</th> : ""}
            </tr>
          </thead>
          <tbody>
            {countries.map((product) => (
              <tr key={product.id}>
                <td>{product.country.name}</td>
                <td>{product.brand}</td>
                <td>{product.type}</td>
                <td>{product.description}</td>
                <td>{product.location}</td>
                <td>
                  {!showForm ? (
                    <span>{product.stock}</span>
                  ) : (
                    <input
                      type="number"
                      value={editedStock[product.stock] && product.stock}
                      onChange={(e) => {
                        setEditedStock({
                          ...editedStock,
                          [product.id]: e.target.value,
                        });
                      }}
                    />
                  )}
                </td>
                <td>
                  {!showForm ? (
                    <button onClick={toggle}>Edit stock</button>
                  ) : (
                    <button
                      onClick={() => {
                        updateStock(product.id);
                        toggle();
                      }}
                    >
                      Save
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
