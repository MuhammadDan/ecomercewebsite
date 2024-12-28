import React, { useState } from "react";

const Create = () => {
    const [title,settitle] = useState("");
    const [image,setimage] = useState("");
    const [price,setprice] = useState("");
    const [description,setdescription] = useState("");
    const [category,setcategory] = useState("");
  return (
    <>
      <form className="flex flex-col items-center p-[5%] w-screen h-screen">
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
        <input
          type="text"
          placeholder="Type category"
          onChange={(e)=>setcategory(e.target.value)}
          value={category}
          className="text-1xl bg-zinc-100 border p-3 w-1/2 rounded mb-3"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e)=>setprice(e.target.value)}
          value={price}
          className="text-1xl bg-zinc-100 border p-3 w-1/2 rounded mb-3"
        />
        <textarea
          type="text"
          placeholder="Description"
          onChange={(e)=>setdescription(e.target.value)}
          value={description}
          className="text-1xl bg-zinc-100 border p-3 w-1/2 rounded mb-3"
        />
      </form>
    </>
  );
};

export default Create;
