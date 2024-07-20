import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import allProd7a from "../assets/allProd7a.webp";
import allProd7b from "../assets/allProd7b.jpg";
import allProd7c from "../assets/allProd7c.jpg";
import { Link } from "react-router-dom";

const SingleBestSell = ({ prod, prodImg }) => {
  const stars = Array(5).fill(0);
  const [showImg, setShowImg] = useState("");
  const colors = {
    on: "#FFAD33",
    off: "#7D8184",
  };
  console.log(prodImg);
  return (
    <>
      <div className="relative w-48 h-60 sm:w-52 md:w-48 lg:w-52 xl:mx-8 bg-[#F5F5F5] p-2 my-2 flex flex-col">
        <div className="flex justify-between my-2">
          <IoMdHeartEmpty
            size={20}
            className="cursor-pointer absolute right-0 mr-2 "
          />
        </div>

        <div className="group flex flex-col mt-6 justify-center items-center">
          {/* {console.log(`showImg ${showImg}`)} */}
          
          <Link
            to={ `/product/${prod._id}`} state= {{ id: prod._id } }
          >
            {console.log(prod._id)}
            <div>
              {showImg !== "" && (
                <img
                  src={showImg}
                  alt={`../assets/allProd${showImg}.jpg`}
                  className="w-[75px]"
                />
              )}
              {showImg === "" && (
                <img src={prodImg} alt={prod.thumbnail} className="w-30 h-28" />
              )}
            </div>
          </Link>
          <div className="invisible py-0.5 group-hover:cursor-pointer bg-black text-white w-full text-center text-xs group-hover:visible">
            Add to Cart
          </div>
        </div>
        <Link to={ `/product/${prod._id}`} state= {{ id: prod._id } }>
          <div className="flex flex-col text-xs mt-2  font-semibold">
            <div>{prod.title}</div>
            <div className="flex gap-2">
              <div className="text-[#DB4444]">₹{prod.price}</div>
            </div>
            {prod.colors && (
              <div className="flex gap-1">
                {prod.colors.map((color, ind) => {
                  {
                    console.log(color);
                  }
                  return (
                    <div key={color.id} className="">
                      <FaCircle
                        color={color.color}
                        className="cursor-pointer"
                        onClick={() => setShowImg(color.img)}
                      />
                    </div>
                  );
                })}
              </div>
            )}
            <div className="flex mt-1 items-center">
              {stars.map((_, index) => {
                return (
                  <div key={index}>
                    <FaStar
                      color={prod.rating > index ? colors.on : colors.off}
                    />
                  </div>
                );
              })}
              {/*<span className='ml-1 text-[#7D8184]'>( {prod.reviews} )</span>*/}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleBestSell;
