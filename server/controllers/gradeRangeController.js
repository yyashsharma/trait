import { GradeRange } from "../models/gradeRangeModel.js";


export const getGradeRange = async (req, res) => {
  try {
    const gradeRanges = await GradeRange.find();
    res.status(200).json({ success: true, data: gradeRanges });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const addGrade = async (req, res) => {
  try {
    const { grade, minAverageMarks, maxAverageMarks } = req.body;
    const newGrade = new GradeRange({ grade, minAverageMarks, maxAverageMarks });
    await newGrade.save();
    res.status(201).json({ message: 'Grade added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};