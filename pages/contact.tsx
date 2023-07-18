import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md'

function contact() {
  return (
    <div>
        
        <div id="AboutBanner" className="relative flex items-center justify-center py-[100px] bg-fixed bg-center bg-cover bg-gray-800 custom-img4">
      
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        
        <div className="text-white z-[2] mt-0">
          <h2 className="mt-3 text-5xl font-bold">Contact</h2>
        </div>
      </div>
    
      <div className='items-center justify-center p-5 sm:w-5/6 sm:mx-auto'>
        <div className='items-center justify-center border border-gray-300 rounded p-5'>
            
        <a href='https://www.instagram.com/ieee.aui/#' target="_blank" rel="noopener noreferrer">
            <h1 className='flex p-2 space-x-4 text-xl font-bold'><AiFillInstagram size={32}/> <span>@ieee.aui</span></h1></a>
            
            <a href='https://www.google.com/intl/fr/gmail/about/' target="_blank" rel="noopener noreferrer">
            <h1 className='flex p-2 space-x-4 text-xl font-bold'><MdEmail size={30}/> <span>ieeestudentbranch@aui.ma</span></h1></a>
        </div>
    </div>
    </div>
  )
}

export default contact