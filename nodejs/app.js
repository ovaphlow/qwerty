const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
  console.info(`${new Date()} - [${req.method}] ${req.originalUrl}`)
  next()
})

app.route('/')
  .get((req, res) => {
    console.info(111)
    res.status(200).json({ message: '服务器消息' })
  })

app.listen(8000, () => {
  console.info(`服务运行于端口 8000`)
})
