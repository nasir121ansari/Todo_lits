const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <input
              type="text"
              value={task.text}
              onChange={(e) => onEdit(task.id, e.target.value)}
            />
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  