import React, { useRef } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import './Login.scss'
function Login() {
  const {login, setLogin} = useContext(Context)
  function fn (){
if(ref.current.value != 0 && ref2.current.value != 0){
  navigate('/sinif3')
}
    // console.log(ref.current.value);
    // console.log(ref2.current.value);
    // if(ref.current.value == ref.current.value  && ref2.current.value == ref2.current.value ){
    //   navigate ("/")
     
    // }
  }
  const navigate  = useNavigate('/')
  const ref = useRef(0)
  const ref2 = useRef(0)
  
  
  return (
    <div className='Login'>
        <div className="container">
           <div className="login__inner">
            <h2>Malumotlarni toldiring</h2>
              <input ref={ref} className='login__name' type="text" placeholder='Ismingiz kriting' /><br /> <br />
              <input ref={ref2} className='login__fam' type="text"  placeholder='Familiyani kriting'/><br /> <br />
              <Link onClick={fn} ><button   className='login__send'>Jonatish</button></Link>
           </div>
        </div>
    </div>
  )
}

export default Login
