import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";
import { InstantSearch, SearchBox, Hits, Configure } from 'react-instantsearch-dom';
import {algoliasearch} from 'algoliasearch';
import "./SearchComponent.css"
import { Link } from 'react-router-dom';
// import 'instantsearch.css/themes/satellite.css';

const searchClient = algoliasearch('1LEB1B4TIL', '1c3470cb4f3dccfe535dc6168a991d52');

const SearchComponent = () => {

  const [products,setProducts]=useState([]);
  const [search,setSearch]=useState("");
  

  useEffect(()=>{
    axios.get(`http://localhost:5000/products`)
    .then(res => {
        setProducts(res.data)
    })
    .catch(e=>{
        console.log("Error fetching products for all products carousal",error);
    })
},[]);
const handleSearchChange = (e) => {
    setSearch(e.target.value);
    cosnole.log(search)
  };
  return (
    <div className='border-[1px] mt-1'>
        <InstantSearch searchClient={searchClient} indexName="products">
        <div className='ais-searchOuter'>
            <SearchBox 
                translations={{placeholder:"What are you looking for?"}}
                onChange={handleSearchChange}
                className="ais-SearchBox"
            />
            <Configure hitsPerPage={6} />
            {search && (<div className="absolute right-10 bg-white p-2 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <Hits hitComponent={Product} />
            </div>)}
        </div>
        </InstantSearch>
    </div>
  )
}
const Product = ({ hit }) => (
    
    <Link to={`/product/${hit.objectID}`} state= {{id:hit.objectID} }>
    <div className="flex cursor-pointer p-1 border-b-[1px] hover:bg-gray-100">
      <img src={hit.thumbnail} className='w-8 h-8'/>
      <div>
      <p>{hit.title}</p>
      <p>{hit.category}</p>
      </div>
    </div>
    </Link>
  );
  

export default SearchComponent
