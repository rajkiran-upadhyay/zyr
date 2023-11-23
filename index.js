import express from "express";
import cors from "cors";
import axios from 'axios';
import dotenv from 'dotenv';

import bodyParser from "body-parser";
import request from "request";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("hi");
});



app.post('/log', function(req, res){
   
    request.post(
      {
      url:'https://payout.myzyro.com/api/ZyroBanking/UserLogin',
      json: {
        userId:req.body.userId,
        password:req.body.password
          },
      headers: {
          'Content-Type': 'application/json'
      }
      },
    function(error, response, body){
      // console.log(error);
      console.log(response);
      console.log(body);
      res.send(body);
    });
    // res.send("body");
  });
  const PORT= process.env.PORT|| 8000;
app.listen(PORT, () => {
  console.log(`server running  on 8081`);
});
