import React from 'react'
import logo from '../Images/logo.png'
import { GoCommentDiscussion } from 'react-icons/go';
import { AiFillBell} from 'react-icons/ai';
import { BsGlobe} from 'react-icons/bs';
import { AiFillCaretDown} from 'react-icons/ai';
import user from './../Images/user.webp'


const Topnavbar = () => {
  return (
    <div>
<nav class="bg-slate-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sticky top-0 p-2">
    {/* first navbar side */}
    <div className='flex items-center justify-between  w-[33%]'>
   <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
   <span className='flex justify-between items-center'>
   <GoCommentDiscussion />
   <p className='text-slate-500 px-1'>Discussion</p>
   </span>
   <div class="relative hidden md:block">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
       
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-black border  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Explore hub"/>
    </div>
   </div>


   {/* second div */}
  
   <div className='flex items-center justify-between  w-[25%]'>
   <button className='bg-blue-500 text-white font-bold p-3 rounded-lg'>
    Create
   </button>
   <AiFillBell size={20}/>
   <span className='flex items-center space-x-1'>
   <BsGlobe/>
   <p>FR</p>
   <AiFillCaretDown/>
   </span>
   <span className='rounded-max border-2 border-white rounded-full'>
   <img src={user} className='w-11' alt='User'/>
   </span>
  

   </div>
    
  </div>
</nav>

  </div>
  )
}

export default Topnavbar