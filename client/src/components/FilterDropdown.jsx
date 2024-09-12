import React from "react";
import Slider from "@mui/material/Slider";

const FilterDropdown = ({priceRange,setPriceRange,MIN,MAX}) => {
  // const handleMinPriceChange = (e) => {
  //   setMinPrice(parseInt(e.target.value));
  // };

  // const handleMaxPriceChange = (e) => {
  //   setMaxPrice(parseInt(e.target.value));
  // };
  console.log(priceRange)
  const handlePriceChange=(e)=>{
    const price=e.target.value
    setPriceRange(price)
  }
  return (
    <div className="z-20 absolute w-[150px] right-2 mt-1 top-full bg-white p-2 px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex flex-col mb-4 p-1">
        <label className="font-semibold text-sm">Price Range</label>
        <Slider
        size="small"
        value={priceRange}
        min={MIN}
        max={MAX}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        className="w-full"
        />

      </div>
    </div>
  );
};

export default FilterDropdown;
