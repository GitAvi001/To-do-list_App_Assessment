import React from "react";
import TaskCard, { Task } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onDone: (id: number) => void;
}

//Listing most recent tasks
const TaskList: React.FC<TaskListProps> = ({ tasks, onDone }) => (
  <div className="w-full max-w-md">
    {tasks.length === 0 ? (
      <div className="text-gray-500 text-center mt-8">No tasks to show.</div>
    ) : (
      tasks.map((task) => <TaskCard key={task.id} task={task} onDone={onDone} />)
    )}
  </div>
);

export default TaskList;