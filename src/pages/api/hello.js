export default function handler(req, res) {
  console.log(req.query)
  fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST', // Phương thức HTTP là POST
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secret: '6Le7UkUpAAAAALazn95-rmkedACWN5uyNNJDkMZO',
      response: req.query.token,
      // Thêm các tham số bạn cần gửi với API
    }),
  })
    .then((response) => response.json()) // Chuyển đổi kết quả trả về thành JSON
    .then((data) => {
      // console.log('Success:', data) // Xử lý dữ liệu trả về
      res.status(200).json({ message: data })
    })
    .catch((error) => {
      // console.error('Error:', error) // Xử lý lỗi
      res.status(200).json({ message: error })
    })
}
