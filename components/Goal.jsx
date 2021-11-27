import { useState, useEffect } from 'react';
import Balloon from './animations/Balloon';

function Goal({
  goal = 'Win the day.',
  id,
  edit,
  editing,
  editValue,
  onEditing,
  onSave,
  onRemove,
}) {
  const [completed, setCompleted] = useState(false);
  const [completedStyle, setCompletedStyle] = useState({});

  useEffect(() => {
    if (completed) {
      setCompletedStyle(hoverStyle);
    } else {
      setCompletedStyle({});
    }
  }, [completed]);

  function handleClick(e) {
    if (e.target.id !== 'edit-button' && !editing) {
      setCompleted(!completed);
    }
  }

  return (
    <li
      id='goal'
      className="flex flex-col text-lg md:text-base md:flex-row justify-between items-center list-none border max-w-prose border-accent rounded p-2 my-2 cursor-pointer hover:border-primary hover:text-primary "
      style={completedStyle}
      onClick={handleClick}
    >
      {!editing && goal}
      {editing && 
        <input type="text"
        className='w-full' 
        id='goal-input' 
        value={editValue} 
        onChange={onEditing} 
        />
      }
      {!editing && (
        <Balloon>
          <span
            id="edit-button"
            className="m-3 text-gray-600 opacity-40 hover:opacity-80 hover:border-cool-blue border hover:bg-cool-blue hover:text-secondary border-gray-600 rounded px-2"
            onClick={edit}
          >
            Edit
          </span>
        </Balloon>
      )}
      {editing && (
        <span className="flex justify-end gap-2 md:mx-3">
          <button
            className="my-3 text-cool-blue border border-cool-blue rounded px-2 hover:bg-cool-blue hover:text-secondary"
            onClick={onSave}
          >
            Save
          </button>
          <button
            className=" my-3 text-red-alert border border-red-alert rounded px-2 hover:bg-red-alert hover:text-secondary"
            onClick={onRemove}
          >
            Remove
          </button>
        </span>
      )}
    </li>
  );
}

const hoverStyle = {
  color: '#0070f3',
  borderColor: '#0070f3',
};

export default Goal;
