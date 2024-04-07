import express from 'express';
import { addStudent, getStudents } from '../controllers/studentController.js';
const router = express.Router();

router.post('/addStudent', addStudent);
router.get('/getStudents', getStudents);

export default router;