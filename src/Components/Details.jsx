import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "./Loading";
const Details = () => {
  const {id} = useParams();
  const [singleproduct, setsingleproduct] = useState(null);
  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      console.log("Single product",data);
      setsingleproduct(data);
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getsingleproduct();
  }, [])
  
  return singleproduct ? (
    <>
      <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]">
        <img
          className="object-contain w-[40%] h-[80%]"
          src={singleproduct.image}
        />
        <div className="w-[50%]">
          <h1 className="text-3xl">
            {singleproduct.title}
          </h1>
          <h2 className="my-3">{setsingleproduct.category}</h2>
          <p className="mb-2">{singleproduct.price}</p>
          <p className="mb-8">
            {singleproduct.description}
          </p>
          <Link className="mr-5 my-3 py-3 px-5 border border-blue-300 text-blue-400 rounded">
            Edit
          </Link>
          <Link className="my-3 py-3 px-5 border border-red-300 text-red-400 rounded">
            Delete
          </Link>
        </div>
      </div>
    </>
  ) : (<Loading />);
};

export default Details;
