const express = require('express');
const config = require('config');
require('dotenv').config();
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());

const movieRoutes = require('./routes/movie');

app.use('/api', movieRoutes);

app.use(
  cors({
    origin: 'http://localhost:3000/',
    credentials: true,
  })
);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running in on port ${PORT}`);
});
