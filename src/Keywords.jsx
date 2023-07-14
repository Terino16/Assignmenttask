import React from 'react'
import {skills} from '../src/data/data'
import { finduson } from '../src/data/data'

const Keywords = () => {
    const Skills=skills.map((skill)=>(
        <button key={skill.id} className='p-2 font-thin  rounded-xl mx-2  ' >
          {skill.title}
        </button>
    ))

    const Finduson=finduson.map((social)=>(
      <img  src={social.image} alt={social.alt} key={social.id} className='w-6 mx-2 border-2 border-black'/>
    )
    )
  return (
    <div className='border-1 via-slate-200 flex flex-col p-3  '>

    <div className='font-bold flex p-3 items-center '>
        Keyword : {Skills}
    </div>
    <div className='p-3 font-bold flex items-center space-x-4'>
        Find us on :  {Finduson}
    </div>
    </div>
  )
}

export default Keywords