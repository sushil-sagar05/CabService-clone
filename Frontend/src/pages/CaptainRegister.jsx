import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function CaptainRegister() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [userData, setuserData] = useState({})
  const submitHandler = (e)=> {
    e.preventDefault();
    setuserData({
      fullName:{
        firstname:firstname,
        lastname:lastname,
      },
      email:email,
      password:password
    })
  //  console.log(userData)
    setemail('')
    setpassword('')
    setfirstname('')
    setlastname('')
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
       <button
       className='bg-[#111] text-white mb-5 rounded px-3   py-2 w-full text-base placeholder:text-sm'
       >Login</button>
     </form>
      <p className='text-center'>Already have a account?<Link to='/captian-login
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