import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Game = () => {
    const navigate = useNavigate();
  return (<>
    <div onClick={()=>navigate('/tictactoe')}>Tic Tac Toe</div>
    <div onClick={()=>navigate('/drum')}>ABCD Drum Kit</div>
  </>
  )
}
