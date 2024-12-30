import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "./Loading";
import { ProductContex } from "../Utils/Contex";
const Details = () => {
  const [products,setproducts] = useContext(ProductContex);
  const navigate = useNavigate();
  const {id} = useParams();
  const [singleproduct, setsingleproduct] = useState(null);
  // const getsingleproduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     console.log("Single product",data);
  //     setsingleproduct(data);
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }

  const deleteproducthandler = (id) =>{
     const Filterproducts = products.filter((p)=>p.id != id);
     setproducts(Filterproducts);
     localStorage.setItem("products",JSON.stringify(Filterproducts));
     navigate("/"); 
  }

  useEffect(() => {
    if(!singleproduct){
      setsingleproduct(products.filter((p)=>p.id == id)[0]);
    }
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
          <h2 className="my-3">{singleproduct.category}</h2>
          <p className="mb-2">$ {singleproduct.price}</p>
          <p className="mb-8">
            {singleproduct.description}
          </p>
          <Link to={`/edit/${singleproduct.id}`} className="mr-5 my-3 py-3 px-5 border border-blue-300 text-blue-400 rounded">
            Edit
          </Link>
          <button onClick={()=>deleteproducthandler(singleproduct.id)} className="my-3 py-3 px-5 border border-red-300 text-red-400 rounded">
            Delete
          </button>
        </div>
      </div>
    </>
  ) : (<Loading />);
};

export default Details;
