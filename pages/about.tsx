import React from 'react'

function about() {
  return (
    <div>
      <div id="AboutBanner" className="relative flex items-center justify-center py-[100px] bg-fixed bg-center bg-cover bg-gray-800 custom-img2">
      
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        
        <div className="text-white z-[2] mt-0">
          <h2 className="mt-3 text-5xl font-bold">About Us</h2>
        </div>
      </div>
    <div className='items-center justify-center p-5 sm:w-5/6 sm:mx-auto'>
    <div className='items-center justify-center p-5 border border-gray-300 rounded mb-4'>
        <h2 className='text-3xl font-bold text-center mb-3'>IEEE AUI Student Branch</h2>
        <p className='text-center'>The Institute of Electrical and Electronics Engineers (IEEE) is the worlds largest technical professional society. Founded in 1884 by a handful of practitioners of the new electrical engineering discipline. 
            The men and women of the IEEE are the technical and scientific professionals making the revolutionary engineering advances which are reshaping our world.</p>
        <p></p>
    </div>
    </div>

    </div>

  )
}

export default about