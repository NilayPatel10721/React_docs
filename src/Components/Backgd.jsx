import React, { useRef } from 'react'
import Card from './card'

function forbg() {

  const ref = useRef(null);
  const data = [
    
    {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,",
    filesize: ".8mb",
    close: true,
    tag: { isopen: true,tagtitle: "Download Now",tagcolor:"green"},
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,",
    filesize: ".8mb",
    close: true,
    tag: { isopen: true,tagtitle: "Download Now",tagcolor:"purple"},
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,",
    filesize: ".8mb",
    close: true,
    tag: { isopen: true,tagtitle: "Upload",tagcolor:"blue"},
  },
];

  return (
    <div ref={ref} className='fixed w-full h-full z-[3] top-0 left-0 p-5 flex items-start gap-16 flex-wrap'>
    {data.map((item,index)=>(
      <Card data={item} reference={ref}  />
    ))}
    </div>
  )
}

export default forbg