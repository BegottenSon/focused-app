import { useState } from 'react';
import Balloon from './animations/Balloon';

export default function BodyInput({ label, value, setValue }) {
  const [editing, setEditing] = useState(false);
  function toggle(e) {
    e.preventDefault();
    setEditing(!editing);
  }
  return (
    <>
      {editing ? (
        <div className="w-80 flex flex-col gap-1 items-center ">
          <label name={label}>{label}</label>
          <textarea
            className="w-80 md:w-96 bg-transparent border border-accent rounded resize-none"
            name={label}
            id={label}
            columns="40"
            rows="10"
            value={value}
            onChange={setValue}
          ></textarea>
          <button
            className="hover:border-cool-blue border hover:bg-cool-blue hover:text-secondary rounded px-2"
            onClick={toggle}
          >
            Set
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-2 w-80 md:w-full border border-transparent hover:border-accent rounded">
          <label className="text-primary text-lg" name={label}>
            {label}
          </label>
          <p>{value}</p>
          <Balloon>
            <button
              className="justify-self-end hover:border-cool-blue border hover:bg-cool-blue hover:text-secondary rounded px-2"
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
