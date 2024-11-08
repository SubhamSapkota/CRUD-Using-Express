import {Router} from "express";
let firstRouter = Router();

firstRouter
  .route("/")  // here "/" means localhost:8000
  .get((req, res, next)=>{
    console.log("I am home get")// it prints on terminalreq, res, next
    res.json("I am home get")// it prints in postman
  })
  .post((req, res, next)=>{
    // let data = req.body;
    // console.log(req.body)
    res.json(req.body)
    //res.json("Hello world") //we cannot do like this because one request has only one response 
  })
  .patch((req, res, next)=>{
    res.json("I am home patch")
  })
  .delete((req, res, next)=>{
    res.json("I am home delete")
  })

  firstRouter
    .route("/check")
    .post((req, res, next)=>{
      console.log(req.query)
      //{ name: 'nitan', age: '30', isMarried: 'false' } comes in the form of string
      res.json("I am check post")
    })
    .get((req, res, next)=>{
      res.json("I am check get")
    })
    .patch((req, res, next)=>{
      res.json("I am check patch")
    })
    .delete((req, res, next)=>{
      res.json("I am check delete")
    })


    firstRouter
    .route("/a/:id/x/:id1") // here a is called static route parameter and :id is called dynamic route parameter
    .post((req,res,next)=>{
      //{id:subham,id1:sapkota}
      res.json(req.params)
      // res.json(req.body)
      // req.params gives dynamic route parameters
    })

    /* 
    localhost:8000/a/b/c/d 
    baseUrl/routeParameter1/routeParameter2/...
    */
  export default firstRouter;

/* 
url = localhost:8000/a/b/c?name=nitan&age=30&isMarried=false
*/