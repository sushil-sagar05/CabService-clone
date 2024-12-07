import React, {useState,useRef } from 'react'
import { Link} from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopup from '../Components/RidePopup'
import{ useGSAP} from '@gsap/react'
import gsap from 'gsap';
import ConfirmRidePopupPanel from '../Components/ConfirmRidePopupPanel'
function CaptainHome() {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ConfirmridePopupPanelRef = useRef(null)

  useGSAP(function(){
    if(ridePopupPanel){
        gsap.to(ridePopupPanelRef.current,{
            transform:'translateY(0)'
        })
    }else{
        gsap.to(ridePopupPanelRef.current,{
            transform:'translateY(100%)'
        })
    }

},[ridePopupPanel])
useGSAP(function(){
  if(confirmRidePopupPanel){
      gsap.to(ConfirmridePopupPanelRef.current,{
          transform:'translateY(0)'
      })
  }else{
      gsap.to(ConfirmridePopupPanelRef.current,{
          transform:'translateY(100%)'
      })
  }

},[confirmRidePopupPanel])


  return (
    <div className='h-screen'>
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
      <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className=' text-lg font-bold ri-logout-box-r-line '></i>
    </Link >
    </div>
    <div className='h-3/5'>
    <img className='h-full w-full object-cover' src="https://cdn.theatlantic.com/thumbor/9o5OxuWCAaGrA19A-LW0MlKj_u8=/0x48:1231x740/976x549/media/img/mt/2017/04/IMG_7105/original.png" alt="" />

    </div>
    <div className='h-2/5 p-6 '>
   <CaptainDetails/>
    </div>
    <div  ref={ridePopupPanelRef} className='fixed translate-y-full  bg-white w-full z-10 bottom-0  py-6 px-3 pt-12'>
       <RidePopup  setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div>
        <div  ref={ConfirmridePopupPanelRef} className='fixed h-full translate-y-full  bg-white w-full z-10 bottom-0  py-6 px-3 pt-12'>
       <ConfirmRidePopupPanel  setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
        </div>
</div>
  )
}

export default CaptainHome