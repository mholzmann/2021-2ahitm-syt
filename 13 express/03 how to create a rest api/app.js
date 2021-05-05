// import module(s)
const express = require('express');

// import router(s)
const tasksRouter = require('./routes/tasks');

// specify http server port
const port = 3000;

// create express application
const app = express();

// mount middleware
app.use(express.static('public', { extensions: ['html'] }));    // serve static files
app.use(express.json());    // parse JSON data and place result in req.body

// mount router(s)
app.use('/api/tasks', tasksRouter);

// start http server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});