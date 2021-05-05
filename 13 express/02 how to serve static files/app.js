// import modules
const express = require('express');
const path = require('path');

// specify http server port
const port = 3000;

// create express application
const app = express();

// mount middleware to serve static files
const publicPath = path.join(__dirname, 'public');
const options = { extensions: ['html'] };
app.use(express.static(publicPath, options));  

// start http server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});