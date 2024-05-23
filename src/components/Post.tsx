import React from 'react'
import Image from 'next/image'
import hala from '/public/hala.jpg'
import mypic from '/public/mypic.jpg'
import logomadrid from '/public/logomadrid.jpg'
import { BiLike, BiRepost } from 'react-icons/bi'
import { MdOutlineInsertComment } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'
import { AiOutlinePicture } from 'react-icons/ai'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { TbArticle } from 'react-icons/tb'
import { LiaThumbsUp } from 'react-icons/lia'


function Post() {
  return (
    <div className = " flex flex-col">
        <div className="flex flex-col border-2 rounded-lg bg-white p-2 w-full ">
            <div className="flex items-center ">
                <div className='rounded-full px-2 '>
            <Image src={mypic} alt="profile picture" className='w-12 rounded-full'/>
            </div>
                <div className = "border-2 rounded-full w-full h-fit bg-white hover:bg-slate-200 ">
                <input className='cursor-pointer focus:outline-none bg-transparent w-full p-3 placeholder-black' type="text " placeholder='Start a post, start writing with AI '/>
                </div>
            </div>
            <div className="flex justify-between">
                <div className = "rounded flex p-2 items-center hover:bg-slate-200 cursor-pointer">
                  <AiOutlinePicture />
                    <p className='px-2'>Media</p>
                </div>

                <div className = "rounded flex p-2 items-center hover:bg-slate-200 cursor-pointer">
                <FaRegCalendarAlt />

                    <p className='px-2'>Event</p>
                </div>

                <div className = "rounded flex p-2 items-center hover:bg-slate-200 cursor-pointer">
                     <TbArticle />
                 
                    <p className='px-2'>Write article</p>
                </div>
            </div>
        </div>
        <hr className='h-px my-5 bg-gray-300 border-0 dark:bg-gray-700'/>
        <div className="flex flex-col bg-white border-2 rounded-lg  ">
            <div className="p-3">
                <div className="flex justify-between">
                    <div className = "flex">
                    <div className='rounded-full px-2 '>
                <Image src={logomadrid} alt="profile picture" className='w-20 rounded-full'/>
            </div>
                        <div className="flex flex-col">
                            <p className=' font-semibold'>Real Madrid C.F.</p>
                            <p className=' text-slate-400'>232,296 followers</p>
                            <p className=' text-slate-400'>1h</p>

                        </div>
                    </div>
                    <div>...</div>

                </div>
                <div>
                    <p>For the third year in a row, <span className = " text-purple-600">Real Madrid C.F</span> is the world's most valuable football club according to <span className=' text-blue-700'>Forbes.</span></p>
                   <a href="" className=' text-blue-700 hover:underline'>https://bit.ly/Valuable_FC</a>
                   <br />
                   <br />
                   <p>El Real Madrid es, por tercer año consecutivo, el club de fútbol más valioso del mundo según 'Forbes'.</p>
                    <a href="" className=' text-blue-700 hover:underline'>https://bit.ly/CF_Valioso</a>
                    <p className=' text-blue-700 '>#RealMadrid</p>
                </div>
            </div>
            <div className="">
            <Image src={hala} alt="Company pic" />
            </div>
            <div className="flex flex-col p-2">
                <div className="flex justify-between items-center">
                <LiaThumbsUp />
                    <div>
                        <p className='text-slate-400 '><span className = "hover:underline cursor-pointer hover:text-blue-500">1 comment</span> · <span className = "hover:underline hover:text-blue-500 cursor-pointer">2 reposts</span></p>
                    </div>
                </div>
          <hr className='h-px my-5 bg-gray-300 border-0 dark:bg-gray-700'/>
                <div className="flex justify-between ">
                    <div className="flex items-center p-1">
                    <BiLike />
                    <span>like</span>
                    </div>
                    <div className="flex items-center p-1">
                    <MdOutlineInsertComment />
                      <span>comment</span>
                    </div>
                    <div className="flex items-center p-1">
                    <BiRepost />
                    <span>repost</span>
                    </div>
                    <div className="flex items-center p-1">
                    <IoIosSend />
                    <span>send</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Post