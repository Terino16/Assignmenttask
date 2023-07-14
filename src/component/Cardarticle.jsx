import React from 'react'

const Cardarticle = (props) => {
  return (
    <div className='bg-white flex flex-col items-center border border-slate-200 rounded-lg m-3 ' key={props.number} >
      {props.headerimg &&
      <div className='bg-indigo-300'>
       <img src={props.headerimg} alt="" className='object-cover h-[8rem] w-96' />
      </div>}
      <div className='flex flex-col items-center p-3'>
     <p className='font-bold'>{props.title}</p>
     {props.secondaryimg &&
      <div className=' p-7'>
       <img src={props.secondaryimg} alt="" className='object-cover h-[19rem]' />
      </div>}
     {
      props.description &&
      <span>
      <p className='my-3 font-thin text-sm'>{props.description}</p>
      <p className='my-3 font-thin text-sm text-blue-500'>{props.tags}</p>
      </span>
     }
     {
      props.authorimg &&
      <span className='flex items-center'>
       <img src={props.authorimg} alt='author img' className='rounded-full' width={35}/>
       <p>{props.author}</p>
      </span>
     }
    </div>
    <button className='p-2 px-11 bg-slate-300 m-3'>
      Download
    </button>
    </div>
  )
}

export default Cardarticle