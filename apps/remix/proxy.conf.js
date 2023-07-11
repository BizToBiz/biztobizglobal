// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'
const target = `http://${HOST}:${PORT}`
module.exports = {
  '/api': { target, secure: false, changeOrigin: true },
  '/graphql': { target, secure: false, ws: true, changeOrigin: true },
}
