import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/charan', (req, res) => {
  res.send('Hello Charan')
})

app.get('/sathwik', (req, res) => {
  res.send('Hello Sathwik')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})


