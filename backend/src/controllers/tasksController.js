const taksModel = require('../models/tasksModel');

const getAll = async (request, response) => {

  const tasks = await taksModel.getAll();

  return response.status(200).json(tasks);
};

module.exports = {
  getAll
};