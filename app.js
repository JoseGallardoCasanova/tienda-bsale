const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({path:".env"})

const app = express();
const  {productApi} = require('./routes/product')
const port = process.env.PORT || 3800;
const host = process.env.HOST || "0.0.0.0";

//inicio servidor

app.use(bodyParser.json());

// app.use(express.static('public'))

productApi(app);

app.listen(port,host, () => console.log(`Server running on port ${port}`));
