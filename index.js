const express = require('express');
const { resolve } = require('path');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3010; 
app.use(express.static('static'));

console.log('API_KEY:', process.env.API_KEY);
console.log('SERVER_SECRET:', process.env.SERVER_SECRET);
console.log('Is Kalvian:', process.env.IS_KALVIAN === 'true');

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
