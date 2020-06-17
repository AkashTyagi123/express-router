const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/').
all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res)=>{
    res.end("We Will be serving you dishes soon");
})
.post((req,res)=>{
    let name = req.body.name;
    let description = req.body.description;
    res.end(`Will add the dish ${name} with desctiption ${description}`);

})
.put((req,res)=>{
    res.statusCode = 403;
    res.end("Cannot put on /dishes");
})
.delete((req,res)=>{
    res.end("Will delete all the dishes");
});
//Routes for a specific dish
dishRouter.route('/:dishId').all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send you dish with dish ID ${req.params.dishId}`);
})
.put((req,res)=>{
    res.end(`Will update the dish with id ${req.params.dishId}`);
})
.post((req,res)=>{
    res.statusCode = 403;
    res.end(`Cannot put on /dishes/${req.params.dishId}`);

})
.delete((req,res)=>{
    res.end(`Will delete the dish with id ${req.params.dishId}`);
}
    
);
module.exports = dishRouter;