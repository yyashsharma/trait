import { Student } from "../models/studentModel.js";


export const addStudent = async (req, res) => {
  try {
    const { name, subject1, subject2, subject3 } = req.body;

    if (!name || !subject1 || !subject2 || !subject3 || name === '' || subject1 === '' || subject2 === '' || subject3 ==='') {
        return new Error("Invalid details")
    }

    const student = new Student({ name, subject1, subject2, subject3 });

    await student.save();
    
    res.status(201).json({ success: true, message: 'Student added successfully',student:student });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students =await Student.find();

    res.status(201).json({ success: true,students:students});
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};