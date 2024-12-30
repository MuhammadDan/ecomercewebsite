import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { ProductContex } from "../Utils/Contex";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const [products,setproducts] = useContext(ProductContex);
  const navigate = useNavigate();
    const [title,settitle] = useState("");
    const [image,setimage] = useState("");
    const [price,setprice] = useState("");
    const [description,setdescription] = useState("");
    const [category,setcategory] = useState("");

    const addproducthandler = (e)=>{
        e.preventDefault();
        if(title.trim().length < 5 || image.trim().length < 5 || price.trim().length<1|| description.trim().length<5 || category.trim().length<5){
            alert("Please fill all the fields");
            return;
        }
        const newproduct = {
          id: nanoid(),
            title,
            image,
            price,
            description,
            category
        }
        setproducts([...products,newproduct]);
        // console.log(newproduct);
        // console.log(products);
        localStorage.setItem("products",JSON.stringify([...products,newproduct]))
        toast.success("Product added successfully");
        navigate("/");
    }
  return (
    <>
      <form onSubmit={addproducthandler} className="flex flex-col items-center p-[5%] w-screen h-screen">
        <h1 className="text-3xl mb-5 w-1/2">Add new Product</h1>
        <input
          type="url"
          placeholder="Image URL"
          onChange={(e)=>setimage(e.target.value)}
          value={image}
          className="text-1xl bg-zinc-100 border p-3 w-1/2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(e)=>settitle(e.target.value)}
          value={title}
          className="text-1xl bg-zinc-100 border p-3 w-1/2 rounded mb-3"
        />
        <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Type category"
          onChange={(e)=>setcategory(e.target.value)}
          value={category}
          className="text-1xl bg-zinc-100 border p-3 w-[48%] rounded mb-3"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e)=>setprice(e.target.value)}
          value={price}
          className="text-1xl bg-zinc-100 border p-3 w-[48%] rounded mb-3"
        />
        </div>
        <textarea
          type="text"
          placeholder="Description"
          onChange={(e)=>setdescription(e.target.value)}
          value={description}
          className="text-1xl bg-zinc-100 border p-3 w-1/2 rounded mb-3" 
          rows="10"
        />
        <div className="w-1/2">
        <button
          className="my-3 py-3 px-5 border border-blue-200 text-blue-300 rounded"
          href="/create"
        >
          Add new Product
        </button>
        </div>
      </form>
    </>
  );
};

export default Create;
