const taksModel = require('../models/tasksModel');

const getAll = async (_request, response) => {
  const tasks = await taksModel.getAll();
  return response.status(200).json(tasks);
};

const createTask = async(request, response) => {
  const createdTask = await taksModel.createTask(request.body);
  return response.status(201).json(createdTask);
};

module.exports = {
  getAll,
  createTask,
};