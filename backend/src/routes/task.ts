import express from 'express';
import { db } from '../db';

const router = express.Router();

// Get 5 most recent uncompleted tasks
router.get('/', async (req, res) => {
  const [rows] = await db.query(
    'SELECT * FROM task WHERE completed = FALSE ORDER BY created_at DESC LIMIT 5'
  );
  res.json(rows);
});

// Add a new task
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  await db.query('INSERT INTO task (title, description) VALUES (?, ?)', [title, description]);
  res.status(201).json({ message: 'Task created' });
});

// Mark a task as completed
router.patch('/:id/complete', async (req, res) => {
  const { id } = req.params;
  await db.query('UPDATE task SET completed = TRUE WHERE id = ?', [id]);
  res.json({ message: 'Task marked as completed' });
});

export default router;