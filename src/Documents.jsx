import React from 'react'
import Options from './component/Options'
import {AiOutlineSearch}  from 'react-icons/ai';
import { filters } from './data/data';
import {AiFillCaretDown} from 'react-icons/ai';
import {BsFilter} from 'react-icons/bs'
import { pdf } from './data/data';
import Cardarticle from './component/Cardarticle';

const Documents = () => {
  const Filters=filters.map((filter)=>(
    <button className='py-2 px-3 rounded-xl hover:bg-slate-400 bg-slate-100 font-extralight' key={filter.id}>
    {filter.option}
    </button>
  ))
  return (
    <div className='flex divide-y'>
       <Options/>

        <div className='p-4 w-[85%]'>
            <div className='flex space-x-3'>
              <span className='w-[70%] flex items-center relative'>
              <AiOutlineSearch className='absolute left-3 ' size={25}/>
                <input placeholder='       Search a Document' className='p-3 rounded-xl w-full border border-black' />
             
                </span>
                <button className='p-2 text-white bg-black rounded-lg'>
                 Add a Document
                </button>
                <button className='p-2 border-2 border-black rounded-lg'>
                  Create a Note

                </button>
            </div>
            <div className='py-3 grid space-y-3 '>
          <span className='flex space-x-6'>
         {Filters}
         </span>
         <span className='flex justify-between'>
          <p className='font-normal'>{filters.length} results</p>
          <span className='flex items-center space-x-1'>
          <BsFilter size={25}/>
          <p>Newly added</p>
          <AiFillCaretDown/>
          </span>

         </span>
         </div>
         <div className='grid grid-cols-3'>
         {pdf.map((article)=>(
          <Cardarticle  
          number={article.id} 
          headerimg={article.headerimg}
          title={article.title}
          secondaryimg={article.secondaryimg}
          description={article.description}
          tags={article.tags}
          author={article.author}
          authorimg={article.authorimg}
           />

         ))}
         </div>
        
        </div>

    </div>
  )
}

export default Documents