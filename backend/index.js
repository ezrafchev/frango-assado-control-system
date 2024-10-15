
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const frangosCrusRouter = require('./routes/frangosCrus');
const insumosRouter = require('./routes/insumos');
const vendasRouter = require('./routes/vendas');
const planejamentoProducaoRouter = require('./routes/planejamentoProducao');

app.use('/api/frangos-crus', frangosCrusRouter);
app.use('/api/insumos', insumosRouter);
app.use('/api/planejamento-producao', planejamentoProducaoRouter);
app.use('/api/vendas', vendasRouter);

const sequelize = require('./config/database');

sequelize.sync().then(() => {
    console.log('Database synchronized');
    });
    app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
