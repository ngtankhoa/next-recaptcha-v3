'use client'

import Image from 'next/image'

export default function Home() {
  const onClick = (e) => {
    e.preventDefault()
    grecaptcha.ready(function () {
      grecaptcha.execute('6Le7UkUpAAAAALu8RK5I6sgdQ4ZHnY1ZBVAbjXV-', { action: 'submit' }).then(function (token) {
        // Add your logic to submit to your backend server here.
        window.console.log('call backend logic here')
      })
    })
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <button onClick={onClick}>Submit</button>
      </div>
    </main>
  )
}

// 6Le7UkUpAAAAALu8RK5I6sgdQ4ZHnY1ZBVAbjXV-
