// Code EyesOnMe Component Here
import React from 'react'

function handlerBlur(){
    console.log('Hey! Eyes on me!')
}
function handlerFocus(){
    console.log('Good!')
}

function EyesOnMe() {
  return (
    <button onFocus={handlerFocus} onBlur={handlerBlur}>{'Eyes on me'}</button>
  )
}

export default EyesOnMe