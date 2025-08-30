const express = require('express');
const app = express();
const articles = require('./routes/articleRoute');

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.use('/api/v1/articles', articles);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
