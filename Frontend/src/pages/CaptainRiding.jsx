import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';
import FinishRide from '../Components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function CaptainRiding() {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
const finishRidePanelRef = useRef(null)
    useGSAP(function(){
        if(finishRidePanel){
            gsap.to(finishRidePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(finishRidePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
      
      },[finishRidePanel])
  return (
    <div className='h-screen relative'>
        
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
      <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className=' text-lg font-bold ri-logout-box-r-line '></i>
    </Link >
    </div>
    <div className='h-4/5'>
    <img className='h-full w-full object-cover' src="https://cdn.theatlantic.com/thumbor/9o5OxuWCAaGrA19A-LW0MlKj_u8=/0x48:1231x740/976x549/media/img/mt/2017/04/IMG_7105/original.png" alt="" />

    </div>
   <div className='h-1/5 relative p-6 bg-yellow-400 flex items-center justify-between '
   onClick={()=>{
    setFinishRidePanel(true)
   }}
   >
   <h5 
     className='p-1 text-center w-[95%]  absolute top-0'><i className='text-3xl py-10 text-gray-200 ri-arrow-down-wide-line'></i></h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className=' mt-5 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
   </div>
   <div  ref={finishRidePanelRef} className='fixed h-full translate-y-full  bg-white w-full z-10 bottom-0  py-6 px-3 pt-12'>
       <FinishRide setFinishRidePanel={setFinishRidePanel}/>
        </div>
</div>
  )
}

export default CaptainRiding