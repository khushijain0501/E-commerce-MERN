import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleBestSell from "../components/SingleBestSell";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { MdOutlineSort } from "react-icons/md";
import FilterDropdown from "../components/FilterDropdown";
import SortComponent from "../components/SortComponent";



const AllProducts = () => {
  const location = useLocation();
  const caller = location.state.caller;
  const tag = location.state.category;
  console.log(tag);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [showDropdown,setShowDropdown]=useState(false)
  const [showSortDropdown,setShowSortDropdown]=useState(false)
  const MIN=0;
  const MAX=100000;
  const [priceRange,setPriceRange]=useState([MIN,MAX]);
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(1000);  // Adjust the max limit as per your product price range
  const [sortBy, setSortBy] = useState('');
  const limit = 8;
  console.log(caller);

  const fetchProducts = (page) => {
    const endpoint = caller
      ? `http://localhost:5000/products/${caller}?page=${page}&limit=${limit}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&sortBy=${sortBy}`
      : `http://localhost:5000/products/product/category/${tag[0]}?page=${page}&limit=${limit}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&sortBy=${sortBy}`;
    axios
      .get(endpoint)
      .then((res) => {
        setProducts(res.data.products);
        setTotalPage(res.data.totalPages);
        console.log(res.data.totalPages);
      })
      .catch((e) => {
        console.log("Error fetching products for all products carousal", error);
      });
  };

  const handleMouseEnter=(src)=>{
    if(src==="filter")
    setShowDropdown(true);
    if(src==="sort")
    setShowSortDropdown(true)
  console.log(showSortDropdown)
  }
  const handleMouseLeave=(src)=>{
    if(src==="filter")
      setShowDropdown(false);
     if(src==="sort")
      setShowSortDropdown(false)
  }
  // if(caller){
  //   useEffect(()=>{
  //     ,[]);}
  // else{
  //   useEffect(()=>{
  //   axios.get(`http://localhost:5000/products/product/category/${tag[0]}`)
  //     .then(res => {
  //         setProducts(res.data)
  //     })
  //     .catch(e=>{
  //         console.log("Error fetching products for all products carousal",error);
  //     })
  // },[]);
  // }
  useEffect(() => {
    fetchProducts(page);
  }, [page,priceRange,sortBy]);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setPage(newPage);
    }
  };
  console.log(products);
  return (
    <div>
      <Navbar showButton={true} />
      <div className="flex flex-col ">
        <div className="flex justify-between ">
          <div className="pt-16 p-4 font-semibold">
            <span className="text-[#A9A9A9] hover:text-black cursor-pointer">
              Account/
            </span>
            <span className="text-[#A9A9A9] hover:text-black cursor-pointer">
              Our products/
            </span>
            <span className="text-black cursor-pointer">
              {caller ? caller : tag[0]}
            </span>
          </div>
          <div className="flex pt-16 text-black gap-3 justify-center items-center mr-6">
            <div onClick={()=>setShowDropdown(true)} onMouseEnter={()=>handleMouseEnter("filter")} onMouseLeave={()=>handleMouseLeave("filter")} className="relative cursor-pointer p-1 text-black flex items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <p>Filter</p>
              <CiFilter />
              {showDropdown && <FilterDropdown priceRange={priceRange} setPriceRange={setPriceRange} MIN={MIN} MAX={MAX}/>}
            </div>
            <div onClick={()=>setShowSortDropdown(true)} onMouseEnter={()=>setShowSortDropdown(true)} onMouseLeave={()=>setShowSortDropdown(false)} className="cursor-pointer p-1 flex items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <p>Sort by</p>
              <MdOutlineSort />
              {showSortDropdown && <SortComponent sortBy={sortBy} setSortBy={setSortBy}/>}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-center my-6 gap-y-4">
            {products.map((prod) => {
              return <SingleBestSell prod={prod} prodImg="" />;
            })}
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          <button
            className=""
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            <MdKeyboardArrowLeft size={36} />
          </button>
          <span className="px-4 py-2  rounded-md">{`Page ${page} of ${totalPage}`}</span>
          <button
            className=""
            disabled={page === totalPage}
            onClick={() => handlePageChange(page + 1)}
          >
            <MdKeyboardArrowRight size={36} />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
