import React from 'react'

function CaptainDetails() {
  return (
    <div>
         <div className='flex items-center justify-between'>
      <div className='flex items-center justify-start gap-3'>
        <img className='h-10 w-10 rounded-xl object-cover' src="https://imgs.search.brave.com/SPEMaiQBDPQOVq47QVewPx2Y0rSC7ZL6WYX8ykzV2Kc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzMyLzM5LzQw/LzM2MF9GXzkzMjM5/NDA1Ml8yckg2WWhV/UWR4VnVSQ2p5MVpT/dEN3WEpkTkVHYU9y/Zi5qcGc" alt="" />
        <h4 className='text-lg font-medium'>Prem Kishore</h4>
      </div>
      <div>
        <h4 className='text-xl font-semibold'>₹290.80</h4>
        <p className='text-sm  text-gray-600'>Earned</p>
      </div>
    </div>
    <div className='flex justify-center mt-6 gap-5 p-3 bg-gray-100 rounded-full items-start'>
      <div className='text-center '>
       <i className=' text-3xl mb-2 font-thin ri-timer-2-line'></i> 
       <h5 className='text-lg font-medium'>10.2</h5>
       <p className='text-sm text-gray-600'>Hours online</p>
      </div>
      <div className='text-center '>
        <i className=' text-3xl mb-2 font-thin ri-speed-up-line'></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours online</p>
      </div>
      <div className='text-center '>
        <i className=' text-3xl mb-2 font-thin ri-booklet-line'></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours online</p>
      </div>
    </div>
    </div>
  )
}

export default CaptainDetails