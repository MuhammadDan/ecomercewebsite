import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
function App() {
  const { search, pathname } = useLocation();
  // console.log("search", search);
  // console.log("pathname", pathname);
  return (
    <>
      <div className="h-screen w-screen flex">
        {(pathname != "/" || search.length > 0) && (
          <Link
            to="/"
            className="absolute text-black-400 bg-zinc-300 mx-[20%] my-[2%]"
          >
            Home
          </Link>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
