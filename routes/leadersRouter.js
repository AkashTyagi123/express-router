const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/').
all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res)=>{
    res.end("We Will showing you leaders  soon");
})
.post((req,res)=>{
    let name = req.body.name;
    let description = req.body.description;
    res.end(`Will add the leader ${name} with desctiption ${description}`);

})
.put((req,res)=>{
    res.statusCode = 403;
    res.end("Cannot put on /promotions");
})
.delete((req,res)=>{
    res.end("Will delete all the leaders");
});
//Routes for a specific dish
leaderRouter.route('/:leaderId').all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
})
.get((req,res)=>{
    res.end(`Will send you leader with  ID ${req.params.leaderId}`);
})
.put((req,res)=>{
    res.end(`Will update the leader with id ${req.params.leaderId}`);
})
.post((req,res)=>{
    res.statusCode = 403;
    res.end(`Cannot put on /leaders/${req.params.leaderId}`);

})
.delete((req,res)=>{
    res.end(`Will delete the leader with id ${req.params.leaderId}`);
}
    
);
module.exports = leaderRouter;