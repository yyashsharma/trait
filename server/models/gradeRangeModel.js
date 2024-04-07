import mongoose from 'mongoose';

const gradeRangeSchema = new mongoose.Schema({
    grade: {
        type: String,
        required: true
    },
    minAverageMarks: {
        type: Number,
        required: true
    },
    maxAverageMarks: {
        type: Number,
        required: true
    }
});

export const GradeRange = mongoose.model('GradeRange', gradeRangeSchema);
