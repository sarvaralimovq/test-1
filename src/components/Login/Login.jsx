import React, { useRef } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import './Login.scss'
function Login() {
  //   const {login, setLogin} = useContext(Context)
  //   function fn (){
    // if(ref.current.value != 0 && ref2.current.value != 0){
      //   navigate('/sinif3')
      //   setLogin(ref.current.value)

// }
//     console.log(ref.current.value);
//     console.log(ref2.current.value);
//     if(ref.current.value == ref.current.value  && ref2.current.value == ref2.current.value ){
  //       navigate ("/")
  
  //     }
  //   }
  //   const ref = useRef(0)
  //   const ref2 = useRef(0)
  let user ={
    login:'Tabassumoy',
    parol:934143434,
    //  & user.parol == e.target.parol.value &
  }
    let navigate  = useNavigate()

  function fnLogin (e){
    // console.log('salom');
    e.preventDefault()


if( e.target.login.value != 0 & e.target.parol.value != 0 || user.parol == e.target.parol.value &  user.login == e.target.login.value  ){
  console.log('togri');
  navigate('/')
  window.localStorage.setItem('key','qwert')
}else{
  e.target.login.value = ''
  e.target.porol.value = ''
  console.log('natogri');
  alert('malumotlarni kriting')
  window.localStorage.setItem('key','asdff')
}
// if( user.parol == e.target.parol.value &  user.login == e.target.login.value  ){
//   navigate('/homehatta')
//   window.localStorage.setItem('key','oqtuvchi')
// }

  }
  return (
    <div className='Login'>
        <div className="container">
           <div className="login__inner">
            <h2>Malumotlarni toldiring</h2>
            <form onSubmit={fnLogin} action="#">
              <input  className='login__name' type="text" placeholder='Ismingiz kriting' name='login'/><br /> <br />
              <input  className='login__fam' type="text"  placeholder='Familiyani kriting' name='parol'/><br /> <br />
              <button type='submit'  className='login__send'>Jonatish</button>
            </form>
           </div>
        </div>
    </div>
  )
}

export default Login
