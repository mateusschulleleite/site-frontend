import React from 'react'
import './Load.css';

export default function Load() {
  return (
    <div className='load__formulario'>
        <img className='load__formulario__spin' width="100" height="100" src="https://img.icons8.com/ios-filled/100/FF4600/recurring-appointment.png" alt="recurring-appointment"/>
        <img className='load__formulario__done' width="100" height="100" src="https://img.icons8.com/ios-filled/50/FF4600/checkmark--v1.png" alt="checkmark--v1"/>
        <img className='load__formulario__error' width="100" height="100" src="https://img.icons8.com/fluency-systems-filled/100/FF4600/x.png" alt="x"/>
    </div>
  )
}
