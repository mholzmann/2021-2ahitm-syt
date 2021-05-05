// import module(s)
const express = require('express');
const { OK, CREATED, NO_CONTENT, BAD_REQUEST, NOT_FOUND } = require('http-status-codes');

// create router
const router = express.Router();

// init data storage
let nextId = 1;
const tasks = [
    { id: nextId++, action: 'practice node.js', done: false },
    { id: nextId++, action: 'clean up', done: false },
    { id: nextId++, action: 'buy milk', done: true },
    { id: nextId++, action: 'work out', done: false }
];

// read all tasks
router.get('/', (req, res) => {
    res.status(OK).json(tasks);
});

// read single task
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id);

    if (!task) {
        res.sendStatus(NOT_FOUND);
        return;
    }

    res.status(OK).json(task);
});

// create task
router.post('/', (req, res) => {
    const action = req.body.action;
    const done = req.body.done;

    if (typeof action !== 'string' || action === '') {
        res.status(BAD_REQUEST).send('action missing or not ok');
        return;
    }
    
    if (typeof done !== 'boolean') {
        res.status(BAD_REQUEST).send('done missing or not ok');
        return;
    }
    
    const task = { id: nextId++, action, done };
    tasks.push(task);
    res.status(CREATED).json(task);
});

// update task
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id);

    if (!task) {
        res.sendStatus(NOT_FOUND);
        return;
    }

    const action = req.body.action;
    const done = req.body.done;

    if (typeof action !== 'string' || action === '') {
        res.status(BAD_REQUEST).send('action missing or not ok');
        return;
    }
    
    if (typeof done !== 'boolean') {
        res.status(BAD_REQUEST).send('done missing or not ok');
        return;
    }

    task.action = action;
    task.done = done;
    res.sendStatus(NO_CONTENT);
});

// delete all tasks
router.delete('/', (req, res) => {
    tasks.splice(0);
    res.sendStatus(NO_CONTENT);
});

// delete single task
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex(task => task.id === id);

    if (index < 0) {
        res.sendStatus(NOT_FOUND);
        return;
    }

    tasks.splice(index, 1);
    res.sendStatus(NO_CONTENT);
});

// export router
module.exports = router;