import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject1: {
        type: Number,
        required: true
    },
    subject2: {
        type: Number,
        required: true
    },
    subject3: {
        type: Number,
        required: true
    }
},
    { timestamps: true, }
);

export const Student = mongoose.model('Student', studentSchema);

