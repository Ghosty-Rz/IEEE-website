import ContactInfo from '@/components/ContactInfo';
import React from 'react';

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
    
      <ContactInfo/>
    </div>
  )
}

export default contact