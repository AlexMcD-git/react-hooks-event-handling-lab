// Code Keypad Component Here
import React from 'react'

function handlerOnPasswordChange(){
    console.log('Entering password...')
}

function Keypad() {
  return (
    <input type="password" onChange={handlerOnPasswordChange}>

    </input>
  )
}

export default Keypad