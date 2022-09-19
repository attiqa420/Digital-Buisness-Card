import React from 'react'
import Profile from '../images/1.png'

function Info() {

    const Ebtn = () => {
        alert('u clicked me')
    }
  return (
   <>
      <img src={Profile} alt='profile' className='profile-img'/>
      <h2 className='name-h'>Attiqa Jabeen</h2>
      <h4 className='p-h'>frontend developer</h4>
      <button className='inf-btn1' onClick={Ebtn}><i className="fa fa-solid fa-envelope"></i> Email</button>
    </>
  )
}

export default Info
