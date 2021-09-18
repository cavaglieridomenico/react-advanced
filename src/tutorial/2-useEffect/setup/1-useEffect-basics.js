import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect')
    if (value >= 1) {
      document.title = `New Message is ${value}`
    }
  }, [value])
  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue((prev) => prev + 1)}>
        Click me
      </button>
    </>
  )
}

export default UseEffectBasics
