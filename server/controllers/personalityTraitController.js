import { GradeRange } from "../models/gradeRangeModel.js";
import { PersonalityTrait } from "../models/personalityTraitModel.js";
import { Student } from "../models/studentModel.js";

export const findTrait = async (req, res) => {
    try {
        // const { name } = req.body;
        const { studentId } = req.params;
        // const student = await Student.findOne({ name });
        const student = await Student.findById(studentId);

        if (!student) {
            throw new Error('Student not found');
        }
        const {name, subject1, subject2, subject3 } = student;

        // Calculate average marks
        const averageMarks = (subject1 + subject2 + subject3) / 3;

        // Find the corresponding grade
        const grade = await GradeRange.findOne({
            minAverageMarks: { $lte: averageMarks },
            maxAverageMarks: { $gte: averageMarks }
        });

        // Find personality trait based on the grade
        const personalityTrait = await PersonalityTrait.findOne({ grade: grade.grade });

        res.json({ name, averageMarks, grade: grade.grade, trait: personalityTrait.trait });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addPersonalityTrait = async (req, res) => {
    try {
      const { grade, trait } = req.body;
      const newPersonalityTrait = new PersonalityTrait({ grade, trait });
      await newPersonalityTrait.save();
      res.status(201).json({ message: 'Personality trait added successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };