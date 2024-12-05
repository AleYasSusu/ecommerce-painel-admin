import React from 'react'
import { GoSearch } from "react-icons/go";

const SearchBox = () => {
  return (
    <>
       <div className='searchBox position-relative'>
        <GoSearch className='mr-2'/>
        <input type='text' placeholder='Search Here...'/>
        
        </div>
    </>
  )
}

export default SearchBox
