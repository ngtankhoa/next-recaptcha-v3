'use client'

import Image from 'next/image'

export default function Home() {
  const onClick = (e) => {
    e.preventDefault()
    grecaptcha.ready(function () {
      grecaptcha.execute('6Le7UkUpAAAAALu8RK5I6sgdQ4ZHnY1ZBVAbjXV-', { action: 'submit' }).then(function (token) {
        // Add your logic to submit to your backend server here.
        window.console.log('call backend logic here')
        window.console.log(token)

        fetch('www.google.com/recaptcha/api/siteverify', {
          method: 'POST', // Phương thức HTTP là POST
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            secret: '6Le7UkUpAAAAALazn95-rmkedACWN5uyNNJDkMZO',
            response: token,
            // Thêm các tham số bạn cần gửi với API
          }),
        })
          .then((response) => response.json()) // Chuyển đổi kết quả trả về thành JSON
          .then((data) => {
            window.console.log('Success:', data) // Xử lý dữ liệu trả về
            alert(data)
          })
          .catch((error) => {
            window.console.error('Error:', error) // Xử lý lỗi
          })
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
