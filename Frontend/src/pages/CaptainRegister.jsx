import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function CaptainRegister() {
  const navigate = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
 
  const [vehicleColor,setVehicleColor] = useState('')
  const [vehiclePlate,setVehiclePlate] = useState('')
  const [vehicleCapacity,setVehicleCapacity] = useState('')
  const [vehicleType,setVehicleType] = useState('')

  const {captain, setCaptain} = React.useContext(CaptainDataContext)
  const submitHandler = async (e)=> {
    e.preventDefault();
    const captainData = {
      fullname:{
        firstname:firstname,
        lastname:lastname,
      },
      email:email,
      password:password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
    if(response.status ===201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
  //  console.log(userData)
    setemail('')
    setpassword('')
    setfirstname('')
    setlastname('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }
  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
     <form  onSubmit={(e)=>{
      submitHandler(e)
     }}>
     <h3 className='text-xl font-semibold mb-2'>What's your Name</h3>
      <div className='flex gap-2 mb-5'>
      <input
      value={firstname}
       onChange={(e)=>{
        setfirstname(e.target.value)
       }}
       className='bg-[#eeeeee] w-1/2  rounded px-3  border py-2  text-lg placeholder:text-sm'
       required type="text"
        placeholder='Fist name' />
        <input
       value={lastname}
       onChange={(e)=>{
        setlastname(e.target.value)
       }}
       className='bg-[#eeeeee] w-1/2  rounded px-3  border py-2  text-lg placeholder:text-sm'
       required type="text"
        placeholder='Last name' />
      </div>
       <h3 className='text-xl font-semibold mb-2'>What's your Email</h3>
       <input
       value={email}
       onChange={(e)=>{
        setemail(e.target.value)
       }}
       className='bg-[#eeeeee] mb-5 rounded px-3  border py-2 w-full text-base placeholder:text-sm'
       required type="email"
        placeholder='your@example.com' />
       <h3 className='text-xl font-semibold mb-2'>Enter Password</h3>
       <input
       value={password}
       onChange={(e)=>{
        setpassword(e.target.value)
       }}
       className='bg-[#eeeeee] mb-5 rounded px-3  border py-2 w-full text-base placeholder:text-sm'
       type="password" placeholder='password' />
          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
              <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
            </div>
       <button
       className='bg-[#111] text-white mb-3 rounded px-3   py-2 w-full text-base placeholder:text-sm'
       >Create Captain Account</button>
     </form>
      <p className='text-center'>Already have a account?<Link to='/captain-login
      ' className='text-blue-600 pl-1'>Login here</Link></p>
    </div>
    <div>
    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
   </div>
  )
}

export default CaptainRegister