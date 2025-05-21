import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", async (req, res)=>{
  const rsp = await axios("https://api.kanye.rest");
  res.render('index.ejs',{
    quote : rsp.data.quote
  });
});

app.get("/api/quote", async (req,res)=>{
  const rsp = await axios("https://api.kanye.rest");
  res.json({quote: rsp.data.quote});
});


app.listen(port, ()=>{
  console.log(`Server is running at port ${port}`);
});


