import React from 'react'
import { Link } from 'react-router-dom'
const Details = () => {
  return (
    <>
    <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>
       <img className='object-contain w-[40%] h-[80%]' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'/>
       <div className='w-[50%]'>
        <h1 className='text-3xl'>Fjallraven - Foldsack No.1 Backpack, Fits 15 Laptops</h1>
        <h2 className='my-3'>men's clothing</h2>
        <p className='mb-2'>109.95</p>
        <p className='mb-8'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
       <Link className='mr-5 my-3 py-3 px-5 border border-blue-300 text-blue-400 rounded'>Edit</Link>
       <Link className='my-3 py-3 px-5 border border-red-300 text-red-400 rounded'>Delete</Link>
       </div>
    </div>
    </>
  )
}

export default Details