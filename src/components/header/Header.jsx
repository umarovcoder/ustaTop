import React from 'react'
import logo from '../../assets/log.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header container'>
        <div className='logo'>
            <img className='rasm' src={logo} alt="logo" />
        </div>

        <div className='navs'>
            <ul>
                <li>Uy</li>
                <li>Xizmatlar</li>
                <li>Tanlangan ishchilar</li>
                <li>Kontakt</li>
                <li className='workchi'>Ishchi bo'lish</li>
            </ul>
        </div>
    </div>
  )
}

export default Header