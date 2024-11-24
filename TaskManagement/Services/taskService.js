const taskRepository = require('../Repositories/TaskRepository');

const createTask = async (taskData) => {
    if (!taskData.title || !taskData.dueDate) {
        throw new Error('Title and due date required');
    }
    return await taskRepository.createTask(taskData);
};

const getTasks = async (status) => {
    const filter = status ? { status } : {};
    return await taskRepository.getTasks(filter);
};

const getTaskById = async (id) => {
    const task = await taskRepository.getTaskById(id);
    if (!task) {
        throw new Error('Task not found');
    }
    return task;
};

const updateTask = async (id, taskData) => {
    const task = await taskRepository.updateTask(id, taskData);
    if (!task) {
        throw new Error('Task not found');
    }
    return task;
};

const deleteTask = async (id) => {
    const task = await taskRepository.deleteTask(id);
    if (!task) {
        throw new Error('Task not found');
    }
    return task;
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };

