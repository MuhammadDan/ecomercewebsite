import React, { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "./Axios";

export const ProductContex = createContext();

const Contex = (props) => {
  const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products"))||null);

  // const getproducts = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     // console.log(data);
  //     setproducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getproducts();
  // }, []);

  return (
    <ProductContex.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContex.Provider>
  );
};

export default Contex;
