import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Navbar />
      <Link to="/details/1" className="h-full w-[85%] bg-red-400 p-10 pt-[5%]  flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div className="mr-3 mb-2 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit amet </h1>
        </div>
      </Link>
    </>
  );
};

export default Home;
