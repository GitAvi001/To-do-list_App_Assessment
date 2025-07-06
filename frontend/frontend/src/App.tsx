import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./components/TaskCard";

//Listing the tasks from backend
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = () => {
    fetchTasks();
  };

  //fetch API to mark tasks as done
  const handleDone = async (id: number) => {
    await fetch(`http://localhost:5000/tasks/${id}/complete`, { method: "PATCH" });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl p-8 gap-8">
        <div className="flex-1">
          <TaskForm onAdd={handleAdd} />
        </div>
        <div className="flex-1">
          <TaskList tasks={tasks} onDone={handleDone} />
        </div>
      </div>
    </div>
  );
};

export default App;