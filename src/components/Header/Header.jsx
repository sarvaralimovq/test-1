import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import logoHeader from '../../img/logo__header.png'
import './Header.scss'
function Header() {
    // const userIsInactive = useFakeInactiveUser(login);
    const {login, setLogin} = useContext(Context)
    // console.log(login);
    // function open (){
        //     if( == 0){
            //         navigate('/')
            
            //     }else{
                //         navigate('/sinif3')
                //     }
                // }
                const navigate = useNavigate();
    function chiqish (){
        window.localStorage.clear()
        navigate('/login')
    }
    const location = useLocation().pathname

  return (
    <div className='Header'>
        <div className="container">
            <nav className='nav'>
                <div className="logo">
                    <Link to={'/'}><img src={logoHeader} alt="logo" /></Link>
                </div>
                <ul className='header__list'>
                    <li className='header__item'>
                        <Link>
                                1-sinif
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link>
                                2-sinif
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link  to={'/sinif3'}>
                                3-sinif     
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link>
                                4-sinif
                        </Link>
                    </li>
                    <li onClick={chiqish} className={location == '/login'?'none': 'chiqish'}>
                        <Link>
                                Qayta kirish
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
