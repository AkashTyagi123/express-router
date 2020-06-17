const express = require ('express');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promotionsRouter = require('./routes/promotionsRouter');
const leadersRouter = require('./routes/leadersRouter');
const port = 3000;
const hostname = 'localhost';
const app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);
app.use('/promotions',promotionsRouter);
app.use('/leaders',leadersRouter);
app.listen(port,hostname,()=>{
    console.log(`Server started on ${hostname}:${port}`);
});

