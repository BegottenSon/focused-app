import { useState } from 'react';
import Goal from './Goal';
import AddGoal from './AddGoal';

function GoalList() {
  const [myGoalList, setMyGoalList] = useState([
    {
      id: 1,
      goal: 'Win the day.',
    },
    {
      id: 2,
      goal: 'Attend the 2024 Summer Olympics.',
    },
    {
      id: 3,
      goal: 'Serve 10 top paying clients in one year.',
    },
  ]);

  //EDIT EXISTING GOAL SETTINGS
  const [editGoal, setEditGoal] = useState('');
  const [activeID, setActiveID] = useState(0);

  function handleCurrentEditing(e) {
    setEditGoal(e.target.value);
  }

  function cancelEdit(e) {
    if (e.target.id !== "edit-button" && e.target.id !== 'goal' && e.target.id !== 'goal-input' && e.target.id !== 'add-goal-input') {
      setActiveID(0)
      setAddingNew(false)
    }
  }

  //SAVE EDITED GOAL SETTINGS
  function saveGoal() {
    let newGoal = {
      id: activeID,
      goal: editGoal,
    };
    let newList = myGoalList;
    let editIndex = myGoalList.findIndex((goal) => goal.id === activeID);
    newList.splice(editIndex, 1, newGoal);
    setMyGoalList(newList);
    setEditGoal('');
    setActiveID(0);
  }

  //ADD NEW GOAL SETTINGS
  const [newGoal, setNewGoal] = useState('');
  const [errorStyle, setErrorStyle ] = useState({});
  const [ addingNew, setAddingNew ] = useState(false);
  const [ nextID, setNextID ] = useState(myGoalList.length);

  function handleNewGoalInput(e) {
    setNewGoal(e.target.value);
  }

  function addNewGoal() {
    if (newGoal !== '') {
      setNextID(nextID + 1)
      let addedGoal = {
        id: nextID + 1,
        goal: newGoal,
      };
      setMyGoalList([addedGoal, ...myGoalList]);
      setNewGoal('');
      setErrorStyle({});
    } else {
      setErrorStyle(alertStyle);
    }
      setAddingNew(false);
  }

  //DELETE GOAL SETTINGS
  function removeGoal() {
    let filteredList = myGoalList.filter(goal => goal.id !== activeID);
    setMyGoalList(filteredList)
    setActiveID(0)
  }

  return (
    <section onClick={cancelEdit}>
      <AddGoal
        newGoal={newGoal}
        onChange={(e) => {
          setNewGoal(e.target.value);
          setAddingNew(true)
          }}
        onClick={addNewGoal}
        style={errorStyle}
      />
      {addingNew && 
      <div className='filter saturate-0 opacity-20'>
        <Goal goal={newGoal} />
      </div>}
      <ul className='w-full'>
        {myGoalList.map((content) => {
          return (
            <Goal
              key={content.id}
              goal={content.goal}
              edit={() => {
                setActiveID(content.id);
                setEditGoal(content.goal);
              }}
              editing={activeID === content.id}
              editValue={editGoal}
              onEditing={handleCurrentEditing}
              onSave={saveGoal}
              onRemove={removeGoal}
            />
          );
        })}
      </ul>
    </section>
  );
}

const alertStyle = {
  outlineColor: 'rgb(221, 52, 84)',
  borderColor: 'rgb(221, 52, 84)',
  animationName: 'alert',
  animationIterationCount: '3',

};

export default GoalList;
