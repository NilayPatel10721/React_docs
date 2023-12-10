import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data , reference}) {
  return (
     <motion.div drag dragConstraints={reference}  dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className=' relative w-60 h-72 rounded-[20px] bg-slate-500   px-10 py-5 text-yellow-50 overflow-hidden' >
        <FaRegFileAlt />
        <p className=' mt-5 leading-tight text-sm'> {data.desc}</p>
      <div className=' footer absolute bottom-0 left-0 w-full  '>
        <div className=' flex items-center justify-between mb-3 py-2 px-1 text-blue-950'>
          <h5>.4mb</h5>
          <span className=' bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm py-2 px-4 rounded-full flex items-center'>
          {data.close ? <IoMdClose/> : <FaDownload />}
          
          </span>
        </div>
        {data.tag.isopen && (
       <div style={{ backgroundColor: data.tag.tagcolor }} className="tag py-4 w-full flex items-center justify-center">
       {data.tag.tagtitle}
         </div>
      )}


        
        </div>
    </motion.div>
  )
}

export default Card