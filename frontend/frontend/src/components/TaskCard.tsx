import React from "react";

//Task car fields
export interface Task {
  id: number;
  title: string;
  description: string;
  created_at: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
  onDone: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDone }) => (
  <div className="flex items-center justify-between bg-gray-100 rounded p-4 mb-3 shadow">
    <div>
      <div className="font-bold">{task.title}</div>
      <div className="text-gray-600 text-sm">{task.description}</div>
    </div>
    <button
      className="ml-4 bg-gray-300 hover:bg-green-400 text-gray-800 font-semibold py-1 px-4 rounded"
      onClick={() => onDone(task.id)}
    >
      Done
    </button>
  </div>
);

export default TaskCard;