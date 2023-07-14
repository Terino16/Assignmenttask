import React from 'react'
import hero from '../src/Images/hero.png'
import {memberupdates} from './data/data'
import {maturityupdates} from './data/data'
import article from '../src/data/article.json'
import { AiFillLock} from 'react-icons/ai';
import {ImLibrary} from 'react-icons/im';
import {FaShare} from 'react-icons/fa';
import Keywords from './Keywords'
import Documents from './Documents'
const Hero = () => {

  const MemberUpdates=memberupdates.map((items)=>(
    <span className='flex flex-col  items-center p-5 px-5' key={items.id}>
    <p className='text-lg text-slate-600 font-serif'>{items.title}</p>
    <p className='font-bold text-black text-lg'>{items.value}</p>
  </span>
  ))

  const MaturityUpdates=maturityupdates.map((items)=>(
    <span className='flex justify-between p-3 px-5 items-center' key={items.id}>
    <p className='text-xl text-slate-600 font-serif'>{items.title}</p>
    <p className=' text-black text-xl'>{items.value}</p>
  </span>
  ))

  return (
    <div className='w-screen divide-y'>
        <img src={hero} alt='Hero Img' />
        <div>
          <span className=' flex justify-start bg-blue-400 font-bold px-2 p-1 '>
            Project
          </span>
        </div>
        <div className='grid grid-cols-3 divide-x'>

          {/* 1st div element */}
        <div className='flex flex-col divide-y '>
         <span className='flex justify-between space-x-4'>
          {MemberUpdates}
         </span>
         <span className='py-8'>
         {MaturityUpdates}
         </span>
        </div>
        

        {/* 2nd Div elemtn */}
        <div className='col-span-2 p-6 text-left' >
          <span>
          <p className='font-bold text-3xl text-black flex items-center '>{article.title} <AiFillLock className='mx-3'/></p>
         
          <p className='text-slate-500'>{article.author}</p>
          </span>
       <p className='text-slate-500 tracking-normal pt-7'>
        {article.content}
       </p>

      <span className='pt-11 flex space-x-7'>
       <button className='p-3 border-2 border-black  flex'>
       <ImLibrary className='mx-2'/> Save to My Library
       </button>
       <button className='p-3 border-2 border-black  flex'>
       <FaShare className='mx-2'/> Share
       </button>
       </span>
    
        </div>
        </div>
        <Keywords/>
        <Documents/>
    </div>
  )
}

export default Hero