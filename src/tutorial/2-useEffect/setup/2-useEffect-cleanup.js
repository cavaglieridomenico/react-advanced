import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const newWidth = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    console.log('useEffect Attivation')
    window.addEventListener('resize', newWidth)
    return () => {
      console.log('cleanup function')

      window.removeEventListener('resize', newWidth)
    }
  })

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup
