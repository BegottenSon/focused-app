import { useState } from 'react';
import Balloon from './animations/Balloon';

export default function Input({ value, setValue, label }) {
  const [editing, setEditing] = useState(false);
  function toggle(e) {
    e.preventDefault();
    setEditing(!editing);
  }
  return (
    <>
      {editing ? (
        <div className="flex gap-2 md:w-full justify-between hover:border-primary">
          <div className="flex gap-1 flex-1">
            <label name={label}>{label}</label>
            <input
              type="text"
              placeholder={label}
              value={value}
              onChange={setValue}
            />
          </div>
          <button
            className="hover:border-cool-blue border hover:bg-cool-blue hover:text-secondary rounded px-2"
            onClick={toggle}
          >
            Set
          </button>
        </div>
      ) : (
        <div className="flex w-80 md:w-full border border-transparent rounded hover:border-accent hover:border">
          <div className="flex gap-1 items-center flex-1">
            <label className="text-lg text-primary" name={label}>
              {label}
            </label>
            <p>{value}</p>
          </div>
          <Balloon>
            <button
              className="hover:border-cool-blue border hover:bg-cool-blue hover:text-secondary rounded px-2"
              onClick={toggle}
            >
              Edit
            </button>
          </Balloon>
        </div>
      )}
    </>
  );
}
