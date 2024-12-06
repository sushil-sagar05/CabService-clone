import React from 'react'

function VehiclePanel(props) {
  return (
    <div >
    <h5 onClick={()=>{
      props.setVehiclePanel(false)
    }} className='p-1 text-center w-[93%]  absolute top-0'><i className='text-3xl py-10 text-gray-200 ri-arrow-down-wide-line'></i></h5>
     <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex border-2 mb-2 active:border-black  rounded-xl p-3 w-full items-center  justify-between ">
      <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
      <div className='w-1/2'>
          <h4 className='font-medium text-sm'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
          <h5 className='font-medium text-sm '>2 mins away</h5>
          <p className='font-medium text-xs text-gray-600 '>Affordable, compact rides</p>
      </div>
      <h2 className='text-lg font-semibold'>₹193.20</h2>
      </div>
      <div  onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex border-2 mb-2 active:border-black  rounded-xl p-3 w-full items-center  justify-between ">
      <img className='h-14' src="https://tse4.mm.bing.net/th?id=OIP.znY96OhfmQ9RecEw45FS_AHaE7&pid=Api&P=0&h=180" alt="" />
      <div className='w-1/2'>
          <h4 className='font-medium text-sm'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
          <h5 className='font-medium text-sm '>3 mins away</h5>
          <p className='font-medium text-xs text-gray-600 '>Affordable,motorcycle  rides</p>
      </div>
      <h2 className='text-lg font-semibold'>₹65</h2>
      </div>
      <div  onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex border-2 mb-2 active:border-black  rounded-xl p-3 w-full items-center  justify-between ">
      <img className='h-14' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
      <div className='ml-2 w-1/2'>
          <h4 className='font-medium text-sm'>UberAuto <span><i className='ri-user-3-fill'></i>3</span></h4>
          <h5 className='font-medium text-sm '>2 mins away</h5>
          <p className='font-medium text-xs text-gray-600 '>Affordable, Auto rides</p>
      </div>
      <h2 className='text-lg font-semibold'>₹187.20</h2>
      </div>
      
  </div>
  )
}

export default VehiclePanel