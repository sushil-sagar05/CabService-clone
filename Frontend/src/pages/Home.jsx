import React,{useState,useRef} from 'react'
import{ useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel';
import VehiclePanel from '../Components/VehiclePanel';
import ConfirmRide from '../Components/ConfirmRide';
import LookingForDriver from '../Components/LookingForDriver';
import WaitingForDriver from '../Components/WaitingForDriver';
function Home() {
    const [pickup, setpickup] = useState('')
    const [destination, setdestination] = useState('')
    const [panelOpen, setpanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelClose = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
   const vehiclePanelRef = useRef(null)
   const [ConfirmRidePanel, setConfirmRidePanel] = useState(false) 
   const confirmRidePanelRef = useRef(null)
   const VehicleFoundRef = useRef(null)
   const [vehicleFound, setVehicleFound] = useState(false) 
   const [waitingForDriver, setWaitingForDriver] = useState(false) 
   const WaitingForDriverRef = useRef(null)

   const submitHandler = (e)=>{
        e.preventDefault()
    }

    useGSAP(function(){
       if (panelOpen) {
        gsap.to(panelRef.current,{
            height:'70%',
            
        })
        gsap.to(panelClose.current,{
            opacity:1
        })
       } else {
        gsap.to(panelRef.current,{
            height:'0%',
          
        })
        gsap.to(panelClose.current,{
            opacity:0

        })
       }
    },[panelOpen])
useGSAP(function(){
    if(vehiclePanel){
        gsap.to(vehiclePanelRef.current,{
            transform:'translateY(0)'
        })
    }else{
        gsap.to(vehiclePanelRef.current,{
            transform:'translateY(100%)'
        })
    }

},[vehiclePanel])


useGSAP(function(){
    if(ConfirmRidePanel){
        gsap.to(confirmRidePanelRef.current,{
            transform:'translateY(0)'
        })
    }else{
        gsap.to(confirmRidePanelRef.current,{
            transform:'translateY(100%)'
        })
    }

},[ConfirmRidePanel])

useGSAP(function(){
    if(vehicleFound){
        gsap.to(VehicleFoundRef.current,{
            transform:'translateY(0)'
        })
    }else{
        gsap.to(VehicleFoundRef.current,{
            transform:'translateY(100%)'
        })
    }

},[vehicleFound])
useGSAP(function(){
    if(vehicleFound){
        gsap.to(WaitingForDriverRef.current,{
            transform:'translateY(0)'
        })
    }else{
        gsap.to(WaitingForDriverRef.current,{
            transform:'translateY(100%)'
        })
    }

},[waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
         <img className='w-16 absolute top-5 left-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div  className='h-screen w-screen'>
            {/*img for temporary use*/}
            <img className='h-full w-full object-cover' src="https://cdn.theatlantic.com/thumbor/9o5OxuWCAaGrA19A-LW0MlKj_u8=/0x48:1231x740/976x549/media/img/mt/2017/04/IMG_7105/original.png" alt="" />
        </div>
        <div className=' h-screen  flex flex-col justify-end absolute top-0  w-full '>
            <div className='h-[30%] p-5 bg-white relative'>
          <h5 
          ref={panelClose}
          onClick={()=>{
            setpanelOpen(false)
          }}
          className='absolute opacity-0 right-6 top-6 text-2xl'><i className='ri-arrow-down-wide-line'></i></h5> 
            <h4 className='text-2xl font-semibold'>Find a trip</h4>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} action="">
                <div className="line absolute h-16  w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
                <input 
                onClick={()=>{
                    setpanelOpen(true)
                }}
                value={pickup}
                onChange={(e)=>{
                    setpickup(e.target.value)
                }}
                className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
                <input 
                onClick={()=>{
                    setpanelOpen(true)
                }}
                value={destination}
                onChange={(e)=>{
                    setdestination(e.target.value)
                }}
                className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />

            </form>
            </div>
            <div ref={panelRef} className='h-0  bg-white  '>
                    <LocationSearchPanel  setpanelOpen={setpanelOpen} setVehiclePanel={setVehiclePanel} />
            </div>
        </div>
        <div ref={vehiclePanelRef} className='fixed translate-y-full  bg-white w-full z-10 bottom-0 p-3 py-8 px-3 pt-12'>
         <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
        <div ref={confirmRidePanelRef}  className='fixed translate-y-full  bg-white w-full z-10 bottom-0  py-6 px-3 pt-12'>
         <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
        </div>
        <div  ref={VehicleFoundRef} className='fixed translate-y-full  bg-white w-full z-10 bottom-0  py-6 px-3 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
        </div>
        <div ref={WaitingForDriverRef}  className='fixed   bg-white w-full z-10 bottom-0  py-6 px-3 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver} />
        </div>
    </div>
  )
}

export default Home