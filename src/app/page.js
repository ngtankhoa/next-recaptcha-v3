import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <button
          className='g-recaptcha'
          data-sitekey='6Le7UkUpAAAAALu8RK5I6sgdQ4ZHnY1ZBVAbjXV-'
          data-callback='onSubmit'
          data-action='submit'
        >
          Submit
        </button>
      </div>
    </main>
  )
}

// 6Le7UkUpAAAAALu8RK5I6sgdQ4ZHnY1ZBVAbjXV-
