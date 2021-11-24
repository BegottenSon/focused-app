import { useState, useEffect } from 'react';
import Goal from './Goal';
import AddGoal from './AddGoal';
import {
  collection,
  query,
  onSnapshot,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/clientApp.js';

function GoalList({ user, userId }) {
  const [goalList, setGoalList] = useState(null);
  const [userRef, setUserRef] = useState('1');

  useEffect(() => {
    setGoalList(user.goals);
    async function loadUser() {
      if (user && userId) {
        setUserRef(doc(db, 'users', userId));
      } else {
        setUserRef(doc(db, 'users', 'VHw0VazeFRB5ZelyJiuU'));
        console.log('default user loaded');
      }
    }
    loadUser();
  }, [user]);

  //FIREBASE USER VARIBLE DECLARATIONS
  // let userRef = doc(db, 'users', '1');
  const checkRef = collection(db, 'users');
  const que = query(checkRef, where('username', '==', 'BegottenSon'));
  async function checker() {
    const snap = await getDocs(que);
    await snap.forEach((doc) => console.log(doc.id));
  }
  // checker()

  //EDIT EXISTING GOAL SETTINGS
  const [editGoal, setEditGoal] = useState('');
  const [activeID, setActiveID] = useState(0);

  function handleCurrentEditing(e) {
    setEditGoal(e.target.value);
  }

  function cancelEdit(e) {
    if (
      e.target.id !== 'edit-button' &&
      e.target.id !== 'goal' &&
      e.target.id !== 'goal-input' &&
      e.target.id !== 'add-goal-input'
    ) {
      setActiveID(0);
      setAddingNew(false);
    }
  }

  //SAVE EDITED GOAL SETTINGS
  async function saveGoal() {
    let newGoal = {
      id: activeID,
      goal: editGoal,
    };
    let newList = goalList;
    let editIndex = goalList.findIndex((goal) => goal.id === activeID);
    newList.splice(editIndex, 1, newGoal);
    setGoalList(newList);
    //Update Firebase only if there's a user logged in
    if (user) {
      await updateDoc(userRef, { goals: newList });
    }

    setEditGoal('');
    setActiveID(0);
  }

  //ADD NEW GOAL SETTINGS
  const [newGoal, setNewGoal] = useState('');
  const [errorStyle, setErrorStyle] = useState({});
  const [addingNew, setAddingNew] = useState(false);
  const [nextID, setNextID] = useState(0);

  function handleNewGoalInput(e) {
    setNewGoal(e.target.value);
  }

  async function addNewGoal() {
    if (newGoal !== '') {
      let addedGoal = {
        id: Math.floor(Math.random() * 2000),
        goal: newGoal,
      };

      if (goalList) {
        setGoalList([addedGoal, ...goalList]);
        //Connection to Firebase only if there's a user logged in
        if (user) {
          await updateDoc(userRef, { goals: [addedGoal, ...goalList] });
        }
      } else {
        setGoalList([addedGoal]);
        await updateDoc(userRef, { goals: [addedGoal] });
      }
      setNewGoal('');
      setErrorStyle({});
    } else {
      setErrorStyle(alertStyle);
    }
    setAddingNew(false);
  }

  //DELETE GOAL SETTINGS
  async function removeGoal() {
    let filteredList = goalList.filter((goal) => goal.id !== activeID);
    //Update Firebase only if user is logged in
    if (user) {
      await updateDoc(userRef, { goals: filteredList });
    }
    setGoalList(filteredList);
    setActiveID(0);
  }

  return (
    <section onClick={cancelEdit}>
      <AddGoal
        newGoal={newGoal}
        onChange={(e) => {
          setNewGoal(e.target.value);
          setAddingNew(true);
        }}
        onClick={addNewGoal}
        style={errorStyle}
      />
      {addingNew && (
        <div className="filter saturate-0 opacity-20">
          <Goal goal={newGoal} />
        </div>
      )}
      <ul className="w-full">
        {goalList ? (
          goalList.map((goal) => {
            return (
              <Goal
                key={goal.id}
                goal={goal.goal}
                edit={() => {
                  setActiveID(goal.id);
                  setEditGoal(goal.goal);
                }}
                editing={activeID === goal.id}
                editValue={editGoal}
                onEditing={handleCurrentEditing}
                onSave={saveGoal}
                onRemove={removeGoal}
              />
            );
          })
        ) : (
          <li className="my-3 p-2 text-center text-xl bg-cool-blue rounded">
            Add a goal to get inspired
          </li>
        )}
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
