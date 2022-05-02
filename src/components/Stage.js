import { FaArrowLeft, FaArrowRight, FaTrashAlt } from 'react-icons/fa';

export default function Stage({
  heading,
  tasks,
  onMoveForward,
  onMoveBackward,
  onDelete,
}) {
  return (
    <div className="column m-3 has-background-light height-75vh overflowy-scroll">
      <h3 className="title is-4 has-text-centered">{heading}</h3>
      {tasks.map((task) => (
        <div key={task.id} className="level has-background-white p-3">
          <p>{task.name}</p>
          <div className="buttons are-small">
            <button
              className="button"
              disabled={task.stage === 0}
              onClick={() => onMoveBackward(task.id)}
            >
              <FaArrowLeft />
            </button>
            <button
              className="button"
              disabled={task.stage === 2}
              onClick={() => onMoveForward(task.id)}
            >
              <FaArrowRight />
            </button>
            <button
              className="button is-danger"
              onClick={() => onDelete(task.id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
