import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaLinkedin } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { IoBriefcase, IoChatbubbleEllipsesOutline, IoHome } from 'react-icons/io5';
import { MdSupervisorAccount } from 'react-icons/md';
import Image from 'next/image'
import linkedin from '/public/linkedin.png'
function Header() {
  return (
    <div className = " bg-white h-16 flex items-center space-x-5">
        {/* This is the left side  */}
        <div className="flex items-center pl-20 basis-2/4 w-full space-x-3">
            <div className="">
            <Image src={linkedin} alt="profile picture" className=' w-14'/>
            </div>
            <div className="flex items-center search border-2 rounded  w-3/5 bg-slate-200 p-1">
            <CiSearch />
              <input className='focus:outline-none bg-inherit' type="text " placeholder='Search' />
            </div>
        </div>

        {/* this is the right side  */}
        <div className="flex space-x-5 "> 
          <div className="flex items-center flex-col text-gray-400 hover:text-black hover:cursor-pointer">
            <IoHome/>
         <span>Home</span>
           </div>
          <div className="flex items-center flex-col text-gray-400  hover:text-black hover:cursor-pointer" >
            <MdSupervisorAccount />
         <span>My Network</span>
          </div>
          <div className="flex items-center flex-col text-gray-400  hover:text-black hover:cursor-pointer">
          <IoBriefcase />
          <span>Jobs</span>
          </div>
          <div className="flex items-center flex-col text-gray-400  hover:text-black hover:cursor-pointer">
          <IoChatbubbleEllipsesOutline />
          <span >Messaging </span>
          </div>
          <div className="flex items-center flex-col text-gray-400  hover:text-black hover:cursor-pointer">
          <IoIosNotifications   />
          <span  className= ""> Notifications </span>
          </div>
       
        </div>
       
       </div>
  )
}

export default Header