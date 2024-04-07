// routes/personalityRoutes.js
import express from 'express'
import { addPersonalityTrait, findTrait } from '../controllers/personalityTraitController.js';
const router = express.Router();


// Route to get personality trait based on student data
router.get('/findTrait/:studentId', findTrait);
router.post('/addTrait', addPersonalityTrait);

export default router;