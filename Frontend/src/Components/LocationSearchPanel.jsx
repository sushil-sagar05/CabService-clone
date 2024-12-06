import React from 'react'

function LocationSearchPanel(props) {
    
    const locations =[
        "21B, Near Medical College, Sigheshwar,Madhepura",
        "24B, Near Engineering College, Sigheshwar,Madhepura",
        "20A, Near Madhepura University, Sigheshwar,Madhepura",
        "90F, Near Saibella High School, Sigheshwar,Madhepura",
    ]
  return (
    <div>
        {
            locations.map(function(elem ,idx){
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setpanelOpen(false)
                }} className='flex  border-2 p-3 border-white active:border-black items-center gap-4 my-2 justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-fill'></i></h2>
                <h4 className='font-medium '>{elem}</h4>
            </div>
               
            })
        }
        
        
    </div>
  )
}

export default LocationSearchPanel