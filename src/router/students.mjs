import express from 'express';
import { getStudent as getStudentByNickname, saveStudent, getAllStudents } from '../services/students.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getStudent
router.get('/:nickname', async (req, res) => {
  const result = await getStudentByNickname(req.params.nickname)
  res.status(200).json(result);
})

// getAllStudents
router.get('/', async (req, res) => {
  const results = await getAllStudents();
  res.status(200).json(results);
});

// saveUser
router.post('/', authenticate, async (req, res) => {
    const existingStudent = await getStudentByNickname(req.body.nickname);
    if(existingStudent){
        return res.status(400).send("Student already exists!");
    } 

    const result = await saveStudent(req.body);
    res.status(200).json(result);
})


export default router;