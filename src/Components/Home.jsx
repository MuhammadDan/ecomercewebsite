import React from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ProductContex } from "../Utils/Contex";
import Loading from "./Loading";
const Home = () => {
  const [products] = useContext(ProductContex);
  // console.log("All data", products);
  const {search} = useLocation();
  const particularcategory = decodeURIComponent(search.split('=')[1]);
  console.log(particularcategory);
  
  return products ? (
    <>
      <Navbar />
      <div className="h-full w-[85%] bg-red-400 p-10 pt-[5%]  flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((item, index) => (
          <Link
            to={`/details/${item.id}`}
            key={index}
            className="mr-3 mb-2 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
          >
            <div
              className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <h1>{item.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
