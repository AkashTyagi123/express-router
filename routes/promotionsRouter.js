const express = require('express');
const bodyParser = require('body-parser');
const promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());

promotionRouter.route('/').
all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res)=>{
    res.end("We Will Displaying promotions soon");
})
.post((req,res)=>{
    let name = req.body.name;
    let description = req.body.description;
    res.end(`Will add the promotion ${name} with desctiption ${description}`);

})
.put((req,res)=>{
    res.statusCode = 403;
    res.end("Cannot put on /promotions");
})
.delete((req,res)=>{
    res.end("Will delete all the promotions");
});
//Routes for a specific promotion
promotionRouter.route('/:promoId').all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send you the promotion with promotion ID ${req.params.promoId}`);
})
.put((req,res)=>{
    res.end(`Will update the promotion with id ${req.params.promoId}`);
})
.post((req,res)=>{
    res.statusCode = 403;
    res.end(`Cannot put on /dishes/${req.params.promoId}`);

})
.delete((req,res)=>{
    res.end(`Will delete the promotions with id ${req.params.promoId}`);
}
    
);



module.exports = promotionRouter;