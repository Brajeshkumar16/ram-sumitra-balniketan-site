import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='content'>
        <div className="left">
            <img src={logo} alt="" />
            <div className="title">Ram Sumitra Bal Niketan</div>
        </div>
        <div className="right">
            <div className="Home" onClick={()=>navigate('/')}>Home</div>
            <div className="Institute" onClick={()=>navigate('/institute')}>Institute</div>
            <div className="Games" onClick={()=>navigate('/tictactoe')}>Games</div>
            <div className="Result">Result</div>
            <div className="Contact">Contact</div>
            <div className="Study" onClick={()=>navigate('/study')}>Study</div>
        </div>
    </div>
  )
}
