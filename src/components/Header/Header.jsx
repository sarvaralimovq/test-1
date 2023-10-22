import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import logoHeader from '../../img/logo__header.png'
import './Header.scss'
function Header() {
    const navigate = useNavigate()
    function open (){
        if(login == 0){
            navigate('/')
            
        }else{
            navigate('/sinif3')
        }
    }
    const {login, setLogin} = useContext(Context)
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
                        <Link onClick={open} to={'/sinif3'}>
                                3-sinif     
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link>
                                4-sinif
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
