import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
function CaptainLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 const {captain,setCaptain} = React.useContext(CaptainDataContext)
 const navigate = useNavigate()
  const submitHandler = async (e)=>{
    e.preventDefault();
    const captainData = {
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData)
    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
   // console.log(userData)
      setEmail('')
      setPassword('')
  }
  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
     <form onSubmit={(e)=>{
       submitHandler(e)
     }} >
       <h3 className='text-xl font-semibold mb-2'>What's your Email</h3>
       <input
       value={email}
       onChange={(e)=>{
         setEmail(e.target.value)
       }}
       className='bg-[#eeeeee] mb-7 rounded px-3  border py-2 w-full text-lg placeholder:text-base'
       required type="email"
        placeholder='your@example.com' />
       <h3 className='text-xl font-semibold mb-2'>Enter Password</h3>
       <input
       value={password}
       onChange={(e)=>{
         setPassword(e.target.value)
       }}
       className='bg-[#eeeeee] mb-7 rounded px-3  border py-2 w-full text-lg placeholder:text-base'
       type="password" placeholder='password' />
       <button
       className='bg-[#111] text-white mb-7 rounded px-3   py-2 w-full text-lg placeholder:text-base'
       >Login</button>
     </form>
      <p className='text-center'>Join the fleet<Link to='/captain-signup
      ' className='text-blue-600 pl-1'>Register as captain</Link></p>
    </div>
    <div>
     <Link to='/login'
      className='bg-[#111] flex justify-center items-center text-white mb-5 rounded px-3   py-2 w-full text-lg placeholder:text-base'
     >Sign in as User</Link>
    </div>
   </div>
 
  )
}

export default CaptainLogin