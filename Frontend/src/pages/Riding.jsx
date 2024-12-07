import React from 'react'
import { Link } from 'react-router-dom'

function Riding() {
  return (
    <div className='h-screen'>
        <Link to='/home' className='right-2 top-3 fixed h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className=' text-lg font-bold ri-home-5-line'></i>
        </Link >
        <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://cdn.theatlantic.com/thumbor/9o5OxuWCAaGrA19A-LW0MlKj_u8=/0x48:1231x740/976x549/media/img/mt/2017/04/IMG_7105/original.png" alt="" />

        </div>
        <div className='h-1/2 p-4 '>
        <div className='flex items-center justify-between'>
    <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt=""  />
    <div className='text-right'>
        <h2 className='text-lg font-medium'>Sagar</h2>
        <h4 className='text-xl -mt-2 -mb-1 font-semibold'>BR 043 AB98</h4>
        <p className='text-sm text-gray-600'>Tata Nano</p>
    </div>
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
            
            <div className='flex items-center gap-5 p-3   '>
            <i className='text-lg ri-currency-line'></i>
            <div  className=''>
                <h3 className='text-lg font-medium'>₹192.20</h3>
                <p className='text-sm -m-1 text-gray-600'>Cash cash</p>
            </div>
            </div>
            
        </div>
        
    </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding