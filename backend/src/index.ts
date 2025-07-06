//Main Service Entry

import express from 'express';
import cors from 'cors';
import tasksRouter from './routes/tasks';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});