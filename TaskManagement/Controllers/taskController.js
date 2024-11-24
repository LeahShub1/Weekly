const taskService = require('../Services/taskService');

const createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        console.log(req.query.status);
        const tasks = await taskService.getTasks(req.query.status);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await taskService.getTaskById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await taskService.updateTask(req.params.id, req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        await taskService.deleteTask(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
