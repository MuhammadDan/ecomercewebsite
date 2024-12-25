import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
        <h1 className='text-2xl'>DKShops.com</h1>
        <a className='my-3 py-3 px-5 border border-blue-200 text-blue-300 rounded' href="/create">Add new Product</a>
        <hr className='w-[80%] my-3'/>
        <h2 className='text-xl mb-3 w-[80%]'>Category</h2>
        <ul className=' w-[80%]'>
            <li className='mb-3 flex items-center'><span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-400'></span>Category 1</li>
            <li className='mb-3 flex items-center'><span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-400'></span>Category 2</li>
            <li className='mb-3 flex items-center'><span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-400'></span>Category 3</li>
            <li className='mb-3 flex items-center'><span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-400'></span>Category 4</li>
        </ul> 
    </nav>
    </>
  )
}

export default Navbar