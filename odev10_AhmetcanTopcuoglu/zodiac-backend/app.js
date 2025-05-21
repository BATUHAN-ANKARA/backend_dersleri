const express = require('express');
const cors = require ('cors');
const morgan = require ('morgan');
const authRoutes = require ("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const zodiacRoutes = require("./routes/zodiacRoutes");
const blogRoutes = require("./routes/blogRoutes");
const logger = require("./middlewares/logger");





const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/zodiac", zodiacRoutes);
app.use("/api/blogs", blogRoutes);
app.use(logger);


// Routes
app.get('/',(req,res)=> {
    res.send('Zodiac API çalışıyor');
});

module.exports = app;