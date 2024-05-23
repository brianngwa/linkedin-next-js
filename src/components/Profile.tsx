import React from 'react'
import Image from 'next/image'
import mypic from '/public/mypic.jpg'

function Profile() {
  return (
    <div className = "flex flex-col  " >
        
        {/* Top card  */}
    <div className="max-h-fit border-2 rounded bg-white divide-y divide-slate-200 mb-2  -z-50">
        <div className = "relative bg-gray-300 p-4 items-center justify-center  ">
        <div className='absolute rounded-full -top-1/2  left-1/2 transform -translate-x-1/2 translate-y-1/2 '>
            <Image src={mypic} alt="profile picture" className='w-12 rounded-full'/>
            </div>
        </div>
        <div className='p-2 flex flex-col items-center justify-center'>
            <h2 className='p-1 pt-4 font-extrabold hover:underline cursor-pointer'>Brian Ngwa Chebegwen</h2>
            <p className='p-1 text-slate-500'>B.S. Software Engineering Web and mobile development AI enthusiast</p>
        </div>
        <div className = "flex flex-col justify-center ">
            <div className='flex flex-row justify-between p-3 hover:bg-slate-300 cursor-pointer '>
            <span className = "text-slate-400 text-sm cursor-pointer">Proile viewers</span> 
            <span className = "text-blue-600">6</span>
            </div>
            <div className='hover:bg-slate-300'>
            <div className='flex flex-row justify-between p-3 cursor-pointer'>
            <span className = "text-slate-400 text-sm">Connections</span> 
            <span className = "text-blue-600">79</span>
            </div>
            <p className = "p-1 text-sm">Grow your network</p>
            </div>

           
        </div>
        <div className = "p-3 hover:bg-slate-300">
            <p className = "p-1 text-slate-400 text-sm">Boost your career with Premium</p>
            <p className = "p-1 text-sm font-bold">Get hired faster. Try Premium free</p>
        </div>
        <div className = "p-3 hover:bg-slate-300">
        <p className='p-1'>Saved items</p>
        </div>

        


    </div>

    <div className="max-h-80">

    </div>

    {/* Bottom card  */}
    <div className="max-h-80 border-2 rounded bg-white px-3 text-slate-500" >
        <p>Recent</p>
        <p className='p-1'> <span className='font-bold p-1'>#</span>softwaredevelopment</p>
        <p className = "p-1"><span className='font-extrabold p-1'>#</span>recruiting</p>
        <p className='p-1'><span className='font-extrabold p-1'>#</span>programming</p>
        <p className = "p-1"><span className='font-extrabold p-1'>#</span>competitive programming</p>
        <p className = "p-1"><span className='font-extrabold p-1'>#</span>recruitement</p>

    </div >
    
    </div>
    
  )
}

export default Profile