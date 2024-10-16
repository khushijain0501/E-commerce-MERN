const express = require('express');
const cors=require("cors")
const cookieParser=require("cookie-parser");
const authRoute=require("./Routes/AuthRoute");
const productRoute=require("./Routes/ProductRoute")
const dbConnect=require("./db/db.js")
const BASE_URL=process.env.BASE_URL

const app = express();
const port = 5000;

app.use(cors({
    origin:[`${BASE_URL}`],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(express.json()); // Middleware for parsing JSON
app.use(cookieParser());
require("dotenv").config();
app.use("/",authRoute)
app.use("/products",productRoute)

dbConnect()

app.get('/', (req, res) => {
  res.send('Welcome to E-commerce app');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});