const express = require('express')

const app = express()

const sequelize = require('./sequelize')

app.use('/', (req, res, next) => {
  console.info(`${new Date()} - [${req.method}] ${req.originalUrl}`)
  next()
})

app.route('/api/food/')
  .get((req, res) => {
    let sql = `
      select * from test order by id desc limit 200
    `
    sequelize.query(sql, {
      type: sequelize.QueryTypes.SELECT
    })
      .then(result => {
        res.status(200).json({ message: '', content: result })
      })
      .catch(err => {
        console.error(err)
        res.status(500).json({ message: '服务器错误' })
      })
  })

app.listen(8000, () => {
  console.info(`服务运行于端口 8000`)
})
