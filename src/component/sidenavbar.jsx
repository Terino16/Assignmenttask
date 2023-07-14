import React from 'react'
import {sidenavimages} from '../data/data'
import Hero from '../Hero'
const sidenavbar = ({children}) => {

    const sidenav= sidenavimages.map((items)=>
        (
            <span className=' border-2 border-white w-fit' key={items.id}>
            <img src={items.image} className='w-9' alt={items.description}/>
            </span>
        ))
  return (
    <div className='flex'>
  <div class="w-[4%] flex flex-col bg-slate-200 items-center justify-start sticky space-y-3 left-0 p-2">
  {sidenav}
  </div>
  <Hero/>
  </div>
  )
}

export default sidenavbar