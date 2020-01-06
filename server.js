const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const storesRoute = require('./routes/stores')
const connectDB = require('./config/db')

//Load env variables
dotenv.config({
  path: './config/config.env'
})

//Connect to mongoDB Atlas
connectDB() 
//Initialize app
const app = express();
//Body parser
app.use(express.json())
//Use cors
app.use(cors());
//Routes

app.use('/api/v1/stores', storesRoute)




const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
})