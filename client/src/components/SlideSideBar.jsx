import React, { useState } from "react";
import categories from "../data/categories";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const SideBar = () => {
  console.log("Slide Side bar");
  const [showSubCat, setShowSubCat] = useState({});
  
  const [showMenu, setShowMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const toggleSubCat = (index) => {
    setShowSubCat((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const toggleMenu = (e) => {
    setShowMenu(!showMenu);
    setCloseMenu(true)
    console.log(showMenu)
  };
  const toggleCloseMenu = (e) => {
    setCloseMenu(!closeMenu);
    //setShowMenu(false)
    setShowMenu(!showMenu)
    console.log(closeMenu)
  };
  
  console.log(categories);
  return (
    <React.Fragment >
      {showMenu? 
        <IoMdClose className="fixed mt-14  z-50 flex items-center ml-2 w-6 h-6 bg-white " onClick={toggleCloseMenu}/>:
        <GiHamburgerMenu className="fixed z-50 mt-14 flex items-center ml-2 w-6 h-6" onClick={toggleMenu} />
      }
    <div
        className={`fixed top-0 left-0 z-40 transition-transform bg-opacity-50 ${
          showMenu ? "w-screen h-screen bg-black" : "bg-transparent"
        }`}
      >
        < div className="absolute top-0 left-0 z-50 w-64 shadow ">
      <div
      className={` border-b-[1px] border-[#D3D3D3] bg-white p-2 pr-4 top-0 left-0 fixed z-40 ease-in-out duration-300 mt-20 ${
        showMenu? "translate-x-0 " : "-translate-x-full"
       }
       ${
        closeMenu? "-translate-x-180 " : "-translate-x-full"
       }  
      }`}
    >
      {(showMenu) &&(
        <ul className="leading-8 ">
          {categories.map((category, index) => {
            return (
                <React.Fragment key={index}>
              <li key={index} className="flex itmes-center ">
                {category.category}
                {category.subCategory && (
                  <IoIosArrowForward className={`mt-2 ml-1 cursor-pointer ${showSubCat[index]?"rotate-90":"rotate-0"}`}
                  onClick={()=>toggleSubCat(index)}/>
                )}
              </li>
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
        
      )}
      </div>
      </div>
      </div>
      </React.Fragment>
     );
};


export default SideBar;
