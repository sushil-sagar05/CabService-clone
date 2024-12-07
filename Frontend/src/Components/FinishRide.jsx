import React from 'react'
import { Link } from 'react-router-dom'
function FinishRide(props) {
  return (
    <div >
    <h5 onClick={()=>{
     props.setFinishRidePanel(false)
  }}
   className='p-1 text-center w-[93%]  absolute top-0'><i className='text-3xl py-10 text-gray-200 ri-arrow-down-wide-line'></i></h5>
       <h3 className='text-2xl font-semibold mb-5'>Finsh this Ride </h3>
      <div className='flex items-center justify-between p-3  rounded-lg bg-yellow-400 mt-4'>
          <div className='flex items-center gap-5 '>
            <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/rHEoKt1HvbwBOiSdaCYiYVCUtCk_dWz47h_2s374Ups/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlzdGNoYWxsZW5n/ZXMuY29tL2YvaXRl/bXMvMGYzMmFjNjIt/ZWFlNC00MmE0LWJm/MzAtMzZmYTNhNmVi/NzI4LmpwZw" alt="" />  
            <h2 className='text-lg font-medium'>Prem kishore</h2>
          </div>
          <h5 className='text-lg font-semibold'>3.2KM</h5>
      </div>
  <div className='flex gap-2 justify-between flex-col items-center'>
      <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3  border-b-2 '>
             <i className='text-lg ri-map-pin-user-fill'></i>
          <div  className=''>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -m-1 text-gray-600'>Kankariya Talab, Bhopal</p>
          </div>
          </div>
          <div className='flex items-center gap-5 p-3  border-b-2 '>
          <i className='text-lg ri-map-pin-2-fill'></i>
          <div  >
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -m-1 text-gray-600'>Kankariya Talab, Bhopal</p>
          </div>
          </div>
          <div className='flex items-center gap-5 p-3   '>
          <i className='text-lg ri-currency-line'></i>
          <div  className=''>
              <h3 className='text-lg font-medium'>₹192.20</h3>
              <p className='text-sm -m-1 text-gray-600'>Cash cash</p>
          </div>
          </div>
          
      </div>
      <div className='mt-6 w-full'>
   
     <Link to='/captain-home'
      className='w-full mt-10 flex justify-center items-center  bg-green-600 text-white font-semibold p-2 rounded-lg'>Finish Ride</Link>
   
  <p className=' text-xs  mt-10'>Click on finish ride button if you have completed the payment.</p>
      </div>
  </div>
  </div>
  )
}

export default FinishRide