const express = require('express')
const quote = require('./routes/quote')

const app = express()
app.use(quote);

module.exports = app

// standalone服务器
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
