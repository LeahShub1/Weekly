const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['Awaiting treatment', 'in process', 'Done'], default: 'Awaiting treatment' },
    dueDate: { type: Date, required: true },
}, { timestamps: true });

taskSchema.plugin(AutoIncrement, { inc_field: 'id' });


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;

