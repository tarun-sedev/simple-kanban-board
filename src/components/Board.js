import { useState } from 'react';
import Stage from './Stage';

const STAGES = ['To do', 'Ongoing', 'Done'];

function Board() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const inputChangeHandler = ({ target: { value } }) => setInput(value);

  const addTaskHandler = () => {
    if (input) {
      setTasks((prev) => [
        ...prev,
        { id: new Date().toLocaleString(), name: input, stage: 0 },
      ]);
    }
    setInput('');
  };

  const removeTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveForwardHandler = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, stage: task.stage + 1 } : task
      )
    );
  };

  const moveBackwardHandler = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, stage: task.stage - 1 } : task
      )
    );
  };
  return (
    <div className="container">
      <div className="is-flex is-justify-content-center mt-5">
        <div className="field has-addons">
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder="Task"
              value={input}
              onChange={inputChangeHandler}
            />
          </p>
          <p className="control">
            <button className="button" onClick={addTaskHandler}>
              Add Task
            </button>
          </p>
        </div>
      </div>
      <div className="columns mt-5">
        {STAGES.map((stage, idx) => (
          <Stage
            key={stage}
            heading={stage}
            tasks={tasks.filter((task) => task.stage === idx)}
            onMoveForward={moveForwardHandler}
            onMoveBackward={moveBackwardHandler}
            onDelete={removeTaskHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
