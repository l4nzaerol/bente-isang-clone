import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";  // Import the updated CSS

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/tasks")
            .then(response => setTasks(response.data))
            .catch(error => console.error("Error fetching tasks:", error));
    }, []);

    return (
        <div className="container">
            <h1>Task List</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                <span className={`status ${task.completed ? "completed" : "pending"}`}>
                                    {task.completed ? "✅ Completed" : "❌ Pending"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
