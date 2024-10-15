
const express = require('express');
const frangosCrusRouter = require('./routes/frangosCrus');
const insumosRouter = require('./routes/insumos');
const app = express();
app.use(express.json());
app.use('/api/frangos-crus', frangosCrusRouter);
app.use('/api/insumos', insumosRouter);
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const sequelize = require('./config/database');
sequelize.sync().then(() => {
  app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  });
});
