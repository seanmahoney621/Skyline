require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const customerRoutes = require('./routes/customers');

// Middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// Routes
app.use('/api/customers', customerRoutes)



// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})