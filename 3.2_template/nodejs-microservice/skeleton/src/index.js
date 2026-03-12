const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: '${{ values.name }}' });
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to ${{ values.name }}',
    description: '${{ values.description }}'
  });
});

app.listen(PORT, () => {
  console.log(`${{ values.name }} listening on port ${PORT}`);
});

module.exports = app;
