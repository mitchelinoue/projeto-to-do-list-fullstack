const express = require('express');

const router = express.Router();

const taskController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', taskController.getAll);
router.post('/tasks', tasksMiddleware.validateBody, taskController.createTask);

module.exports = router;