import React, { useState, useEffect } from "react";
import StoreBar from "../../components/navbar/StoreBar";
import Products from "../../components/Products/Products";
import { commerce } from "../../lib/commerce";

//

//reducer is way to update our store

const StoreList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); ///commers specific api call ,return promise, destruc data for response
    //data is our products

    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div>
      <StoreBar />
      <Products products={products} />
    </div>
  );
};

export default StoreList;
