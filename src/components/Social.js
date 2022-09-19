import React from 'react'

function Social() {

  const Ebtn1 = () => {
    alert('u clicked me')
} 
  return (
    <div className='footer'>
      
       <button className='f-btn'  onClick={Ebtn1}><i className="fa fa-brands fa-instagram"></i></button>
       <button className='f-btn' onClick={Ebtn1}><i className="fa fa-brands fa-facebook"></i></button>
       <button className='f-btn' onClick={Ebtn1}><i className="fa fa-brands fa-twitter"></i></button>
       <button className='f-btn' onClick={Ebtn1}><i className="fa fa-brands fa-github"></i></button>
    </div>
  )
}

export default Social
