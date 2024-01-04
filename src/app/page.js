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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p>recaptcha V3</p>
        <button className='border-2 border-black' onClick={onClick}>
          Submit
        </button>
        <p>response:</p>
        {JSON.stringify(data)}
      </div>
    </main>
  )
}

// 6Le7UkUpAAAAALu8RK5I6sgdQ4ZHnY1ZBVAbjXV-
