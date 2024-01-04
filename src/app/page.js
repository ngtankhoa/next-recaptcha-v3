'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState({})

  const onClick = (e) => {
    e.preventDefault()
    grecaptcha.ready(function () {
      grecaptcha.execute('6Le7UkUpAAAAALu8RK5I6sgdQ4ZHnY1ZBVAbjXV-', { action: 'submit' }).then(function (token) {
        // Add your logic to submit to your backend server here.
        fetch(`/api/hello?token=${token}`)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => setData(error))
      })
    })
  }

  useEffect(() => {
    console.log(data)

    return () => {}
  }, [data])

  return (
    <main className='p-24'>
      <div>
        <p>recaptcha V3</p>
        <button className='border-2 border-black px-4 py-2' onClick={onClick}>
          Submit
        </button>
        <p>response:</p>
        {JSON.stringify(data)}
      </div>
    </main>
  )
}

// 6Le7UkUpAAAAALu8RK5I6sgdQ4ZHnY1ZBVAbjXV-
