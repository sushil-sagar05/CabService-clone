import React from 'react'

function WaitingForDriver(props) {
  return (
    <div>
          <div>
            <h5 
            onClick={()=>{
                props.waitingForDriver(false)
            }}
            className='p-1 text-center w-[93%]  absolute top-0'><i className='text-3xl py-10 text-gray-200 ri-arrow-down-wide-line'></i></h5>
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
        
    </div>
    </div>
    </div>
  )
}

export default WaitingForDriver