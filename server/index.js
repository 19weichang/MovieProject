const express = require('express')// 引入express
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()// 實例化一個app
const port = 8763// 端口設定 本地8763
app.listen(port, () => console.log(`App listening on port ${port}!`))

app.use(cors({
  origin: true,
  credentials: true
}))
app.use(cookieParser())
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path)
  if (!req.cookies.session) {
    res.cookie(
      'session',
			`session_id_${(Math.random() * 1000000) >> 0}_${Date.now()}`, {
			  maxAge: 900000,
			  httpOnly: true,
			  secure: true,
			  sameSite: 'none'
			})
  }

  next()
})

const path = require('path')
console.log(process.env.DIST_PATH)
const distPath = path.resolve(__dirname, '../dist/', process.env.DIST_PATH || '')

app.use('/', express.static(distPath))
app.get('/', (res) => {
  // res.sendFile(path.resolve(distPath, 'index.html'));
  res.sendFile(__dirname + 'index.html')
})

const routes = require(__dirname + '/routes/index.js')

routes.install(app)
