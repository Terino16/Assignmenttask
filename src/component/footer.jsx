import React from 'react'
import logo from '../Images/logo.png'

const footer = () => {
  return (  
<footer class="bg-slate-100  bottom-0">
    <div class="mx-auto w-screen p-11 py-6 lg:py-8 divide-y  flex flex-col items-center">
        <div className='m-11 mx-[30rem] flex justify-between space-x-8'>
            <img src={logo} alt='altlogo' width={100}/>
            <span className='flex flex-col items-center space-y-3'>
                <p className='font-bold font-serif'>General</p>
                <p className='text-slate-500'>Explore</p>
                <p className='text-slate-500'>FaQ</p>
            </span>
            <span className='flex flex-col items-center space-y-3'>
                <p className='font-bold font-serif'>Social Media</p>
                <p className='text-slate-500'>Contact</p>
                <p className='text-slate-500'>Press Contact</p>
            </span>

        </div>
        <div className=' p-11 flex'>
         <p className='text-slate-500'>Powered by </p>

        </div>
       
         <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum laudantium, doloribus architecto </p>

       
      
    </div>
</footer>

  )
}

export default footer