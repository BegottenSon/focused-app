import Balloon from './animations/Balloon';

function AddGoal({ newGoal, onChange, onClick, style }) {
  return (
    <section className="flex gap-1">
      <input
        type="text"
        id='add-goal-input'
        value={newGoal}
        onChange={onChange}
        placeholder="Write down your dream..."
        className=' px-1'
        style={style}
      />
      <Balloon>
        <button
          onClick={onClick}
          className="border-accent border rounded px-3 hover:border-cool-blue hover:bg-cool-blue hover:text-secondary"
        >
          Add
        </button>
      </Balloon>
    </section>
  );
}

export default AddGoal;
