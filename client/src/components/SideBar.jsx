import React, { useState } from "react";
import categories from "../data/categories";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

const SideBar = () => {
  const [showSubCat, setShowSubCat] = useState({});
  const toggleSubCat = (index) => {
    setShowSubCat((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const [textColor,setTextColor]=useState("black")
  // console.log(categories);
  return (
    <div className="ml-2 p-2 mt-10 xl:mt-14 border-r-[1px] border-[#D3D3D3] ">
      <ul className="leading-8">
        {categories.map((category, index) => {
          return (
            <React.Fragment key={index}>
            <li className={`flex itmes-center hover:font-bold `}>
              {category.category}
              {category.subCategory && category.subCategory.length > 0 && (
                <IoIosArrowForward
                  className={`mt-2 ml-1 cursor-pointer ${showSubCat[index]?"rotate-90":"rotate-0"}`}
                  onClick={()=>toggleSubCat(index)}
                />
              )}
              </li>
              {/* {console.log(category.subCategory)}
              {console.log(showSubCat[index])} */}
              
              {showSubCat[index] && category.subCategory && category.subCategory.length > 0 && 
              (<ul className="pl-4">
                {(category.subCategory).map((option,ind) =>{
                  return (<li key={ind} className="flex itmes-center " >{option.sub}</li>)
                })}
                </ul>)}
            
          </React.Fragment>
          )
        })}
      </ul>
    </div>
  );
};

export default SideBar;
