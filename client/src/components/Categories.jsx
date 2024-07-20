import React from "react";
import CategorySlider from "./CategorySlider";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";


const Categories = () => {
  return (
    <div className="mt-8 flex flex-col overflow-hidden pb-6 border-b-[1px] border-[#D3D3D3]">
      <div className="flex items-center justify-between overflow-hidden">
        <div className="flex items-center  gap-1">
        <div className="h-8 w-4 bg-[#DB4444] ml-4 my-2 mr-1 rounded-sm"></div>
        <div className="text-[#DB4444] text-sm font-semibold">Categories</div>
        </div>
        {/*<div className="flex justify-center items-center gap-1">
        <HiOutlineArrowSmLeft className="w-6 h-6"/>
        <HiOutlineArrowSmRight className="w-6 h-6"/>

  </div>*/}
      </div>
      <div className="text-xl font-bold ml-4  overflow-hidden">Browse By Category</div>
      <CategorySlider/>
    </div>
  );
};

export default Categories;
