import express from 'express';
import { ways } from './function.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/solve', ways); // ✅ just pass function

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
