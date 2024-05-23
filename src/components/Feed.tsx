import React from 'react'
import Image from 'next/image'
import bellingham from '/public/bellingham.jpg'
import vini from '/public/vini.jpg'
import ronaldo from '/public/ronaldo.jpg'
import { IoInformationCircle } from 'react-icons/io5'

function Feed() {
  return (
    <div className = "flex flex-col border-2 rounded-lg bg-white p-2 w-full">
        <div className="flex justify-between p-3">
          <p className = " font-semibold">Add to your feed </p>
          <IoInformationCircle className='cursor-pointer' />

        </div>
        <div className="element flex">
        <div className='rounded-full px-2 '>
            <Image src={ronaldo} alt="profile picture" className='w-20 rounded-full'/>
            </div>
          <div className="info">
            <p className=' font-bold'>Cristiano Ronaldo</p>
            <p className = "text-slate-500">Day Job: I invest and scale companies at companies.com</p>
            <div className = "border-3  border-slate-500  p-2 border rounded-full  w-1/2 hover:cursor-pointer hover:bg-slate-300">
              <p> + Follow</p>
            </div>
          </div>
          </div>
          <div className="element flex">
          <div className='rounded-full px-2 '>
            <Image src={vini} alt="profile picture" className='w-20 rounded-full'/>
            </div>
          <div className="info">
            <p className=' font-bold'>Vinicius Junior</p>
            <p className = "text-slate-500">Day Job: I invest and scale companies at companies.com</p>
            <div className = "border-3  border-slate-500  p-2 border rounded-full  w-1/2 hover:cursor-pointer hover:bg-slate-300">
              <p> + Follow</p>
            </div>
          </div>
          </div>
          <div className="flex">
          <div className='rounded-full px-2 '>
            <Image src={bellingham} alt="profile picture" className=' w-20 rounded-full'/>
            </div>
          <div className="info">
            <p className=' font-bold'>Jude Bellingham</p>
            <p className = "text-slate-500">Day Job: I invest and scale companies at companies.com</p>
            <div className = "border-3  border-slate-500  p-2 border rounded-full  w-1/2 hover:cursor-pointer hover:bg-slate-300">
              <p> + Follow</p>
            </div>
          </div>
          </div>

       
        

    </div>
  )
}

export default Feed