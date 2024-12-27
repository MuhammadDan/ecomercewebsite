import React, { useContext } from "react";
import { ProductContex } from "../Utils/Contex";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [products] = useContext(ProductContex);
  let distinct_category = products && products.reduce((acc,currentval)=>[...acc,currentval.category],[])
  // console.log("specific category",distinct_category);
  distinct_category = [...new Set(distinct_category)]
  console.log("ALL different category",distinct_category);
  
  const color = () =>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.5)`
  }

  return (
    <>
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <h1 className="text-2xl">DKShops.com</h1>
        <a
          className="my-3 py-3 px-5 border border-blue-200 text-blue-300 rounded"
          href="/create"
        >
          Add new Product
        </a>
        <hr className="w-[80%] my-3" />
        <h2 className="text-xl mb-3 w-[80%]">Category</h2>
        <div className=" w-[80%]">
          {distinct_category.map((categoryitem,index)=>(
                <Link key={index} to={`/?category=${categoryitem}`} className="mb-3 flex items-center">
                <span style={{backgroundColor: color()}} className="rounded-full mr-2 w-[15px] h-[15px]"></span>
                {categoryitem}
              </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
