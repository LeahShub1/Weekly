const Task = require('../Models/Task');

const createTask = async (taskData) => {
    const task = new Task(taskData);
    return await task.save();
};

const getTasks = async (filter = {}) => {
    return await Task.find(filter);
};

const getTaskById = async (id) => {
    return await Task.findOne({ id: id });
};

const updateTask = async (id, taskData) => {
    return await Task.findOneAndUpdate({ id: id }, taskData, { new: true });
};

const deleteTask = async (id) => {
    return await Task.findOneAndDelete({id: id});
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
