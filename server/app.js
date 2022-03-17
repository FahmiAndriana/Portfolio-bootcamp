require('dotenv').config();
const express    = require('express');
const app        = express();
const port       = 3000;
const bodyParser = require('body-parser');
const cors       = require('cors');
const users      = require('./routes/user');
const cookieParser = require("cookie-parser");
const mongoose   = require('mongoose');
//const url = 'mongodb://127.0.0.1:27017/Homework';
const url = 'mongodb://Fahmiandriana:Fahmi123@cluster0-shard-00-00.3kcy0.mongodb.net:27017,cluster0-shard-00-01.3kcy0.mongodb.net:27017,cluster0-shard-00-02.3kcy0.mongodb.net:27017/Homework?ssl=true&replicaSet=atlas-7rzkjj-shard-0&authSource=admin&retryWrites=true&w=majority'

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


mongoose.connect(url).then(() => {
  console.log("DB Connected");
});

mongoose.connection.on("error", err => {
  console.log(`DB Connection Error: ${err.message}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/', users);
/* CEK PORT CONNECTION */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})