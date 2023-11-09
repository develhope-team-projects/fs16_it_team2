import React from 'react'
import './loading.css'
import img from "../loading/img/gelato.gif"

const Loading = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <img  className="flex items-center justify-center" src={img} style={{width:"300px"}}/>
    </div>
  )
}

export default Loading