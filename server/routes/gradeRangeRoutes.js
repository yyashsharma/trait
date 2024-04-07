import express from 'express';
import { addGrade, getGradeRange } from '../controllers/gradeRangeController.js';
const router = express.Router();


router.get('/getAllGrades', getGradeRange);
router.post('/addGrade', addGrade);

export default router;