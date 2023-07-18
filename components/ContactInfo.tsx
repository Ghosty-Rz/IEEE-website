import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md'

function ContactInfo() {
  return (
    <div>
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

export default ContactInfo