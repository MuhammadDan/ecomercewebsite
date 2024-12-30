import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContex } from '../Utils/Contex';
import { toast } from 'react-toastify';

const Edit = () => {
  const [products,setproducts] = useContext(ProductContex);
  const {id} = useParams();
  const navigate = useNavigate();
  const [singleproduct, setsingleproduct] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
    category: ""
  });
    // const [title,settitle] = useState("");
    // const [image,setimage] = useState("");
    // const [price,setprice] = useState("");
    // const [description,setdescription] = useState("");
    // const [category,setcategory] = useState("");
    
   const changehandler = (e)=>{
    setsingleproduct({...singleproduct,[e.target.name]:e.target.value});
    // console.log(e.target.name,e.target.value);
   }

    useEffect(() => {
      setsingleproduct(products.filter((p)=>p.id == id)[0]);
    }, [id])
    console.log("Edit karnai wala product",singleproduct);
    

    const editproducthandler = (e)=>{
        e.preventDefault();
        if(singleproduct.title.trim().length < 5 || singleproduct.image.trim().length < 5 || singleproduct.price.trim().length<1|| singleproduct.description.trim().length<5 || singleproduct.category.trim().length<5){
            alert("Please fill all the fields");
            return;
        }
        const productindex = products.findIndex((p)=>p.id == id);
        const copyData = [...products];
        copyData[productindex] = {...products[productindex],...singleproduct};
        // console.log(singleproduct,productindex);
        // console.log(products);
        
        
        
        // const newproduct = {
        //   id: nanoid(),
        //     title,
        //     image,
        //     price,
        //     description,
        //     category
        // }
        setproducts(copyData);
        // console.log(newproduct);
        // console.log(products);
        localStorage.setItem("products",JSON.stringify(copyData))
        toast.success("Product edited successfully");
        navigate(-1);
    }
  return (
    <>
    <form onSubmit={editproducthandler} className="flex flex-col items-center p-[5%] w-screen h-screen">
        <h1 className="text-3xl mb-5 w-1/2">Modify this product</h1>
        <input
          type="url"
          placeholder="Image URL"
          name='image'
          onChange={changehandler}
          value={singleproduct && singleproduct.image}
          className="text-1xl bg-zinc-100 border p-3 w-1/2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Title"
          name='title'
          onChange={changehandler}
          value={singleproduct && singleproduct.title}
          className="text-1xl bg-zinc-100 border p-3 w-1/2 rounded mb-3"
        />
        <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Type category"
          name='category'
          onChange={changehandler}
          value={singleproduct && singleproduct.category}
          className="text-1xl bg-zinc-100 border p-3 w-[48%] rounded mb-3"
        />
        <input
          type="number"
          placeholder="Price"
          name='price'
          onChange={changehandler}
          value={singleproduct && singleproduct.price}
          className="text-1xl bg-zinc-100 border p-3 w-[48%] rounded mb-3"
        />
        </div>
        <textarea
          type="text"
          placeholder="Description"
          name='description'
          onChange={changehandler}
          value={singleproduct && singleproduct.description}
          className="text-1xl bg-zinc-100 border p-3 w-1/2 rounded mb-3" 
          rows="10"
        />
        <div className="w-1/2">
        <button
          className="my-3 py-3 px-5 border border-blue-500 text-blue-500 rounded"
          href="/create"
        >
          Edit Product
        </button>
        </div>
      </form>
    </>
  )
}

export default Edit