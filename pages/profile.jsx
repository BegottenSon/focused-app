import { useUser } from '@auth0/nextjs-auth0';
import {
  collection,
  query,
  where,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
} from 'firebase/firestore';
import Input from '../components/Input';
import BodyInput from '../components/BodyInput';
import { db } from '../firebase/clientApp.js';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [focus, setFocus] = useState('');
  const [life, setLife] = useState('');
  const { user, error, isLoading } = useUser();
  const [userId, setUserId] = useState('');
  const [userRef, setUserRef] = useState('');
  const [activeUser, setActiveUser] = useState('');
  let userArray = [];

  useEffect(() => {
    if (user) {
      setUserId(user.nickname);
      const findUser = query(
        collection(db, 'users'),
        where('username', '==', user.nickname)
      );
      setUserRef(doc(db, 'users', user.nickname));
      const unsub = onSnapshot(findUser, (snapshot) => {
        snapshot.forEach((doc) => {
          userArray.push(doc.data());
        });
        let userResult = userArray[0];
        setActiveUser(userResult);
      });
      return () => unsub();
    }
  }, [user]);

  useEffect(() => {
      if (activeUser) {
    setFirstName(activeUser.first_name);
    setLastName(activeUser.last_name);
    setFocus(activeUser.focus_statement);
    setLife(activeUser.life_mission_statement);
      }
  }, [activeUser]);

  function handleLifeInput(e) {
    e.preventDefault();
    setLife(e.target.value);
  }

  async function saveProfile(e) {
      e.preventDefault();
    await updateDoc(userRef, {
      first_name: firstName,
      last_name: lastName,
      life_mission_statement: life,
      focus_statement: focus,
    });
    console.log(userRef);
  }
  return (
    <section className='grid place-items-center'>
      <form className="grid gap-2 items-center">
        <Input
          label="First Name: "
          value={firstName}
          setValue={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Last Name: "
          value={lastName}
          setValue={(e) => setLastName(e.target.value)}
        />
        <BodyInput
          label="Life Mission Statement: "
          value={life}
          setValue={(e) => setLife(e.target.value)}
          className='self-center'
        />
        <BodyInput
          placeholder="One sentence of your ultimate goal"
          label="Focus Statement: "
          value={focus}
          setValue={(e) => setFocus(e.target.value)}
        />
        <button
          className="my-4 p-2 border border-primary rounded hover:bg-cool-blue hover:border-cool-blue self-center"
          onClick={saveProfile}
        >
          Save Profile
        </button>
      </form>
    </section>
  );
}
