import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('Default user')

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json()
        else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(response.status)
        }
      })
      .then((data) => {
        const { login } = data
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  })

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    )
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  )
}

export default MultipleReturns
