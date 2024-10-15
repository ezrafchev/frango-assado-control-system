
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const frangosCrusRouter = require('./routes/frangosCrus');
const insumosRouter = require('./routes/insumos');

app.use('/api/frangos-crus', frangosCrusRouter);
app.use('/api/insumos', insumosRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
