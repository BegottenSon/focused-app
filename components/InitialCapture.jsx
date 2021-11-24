import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  setDoc,
} from 'firebase/firestore';
import { db } from '../firebase/clientApp.js';
import { useEffect, useState } from 'react';

function InitialCapture({ authUser }) {
  //TODO: setup varibles for inputs and object to send to Firebase
  const [firstName, setFirstName] = useState('');
  const [focus, setFocus] = useState('');
  const [life, setLife] = useState('');
  const username = authUser.nickname;
  const userID = authUser.nickname;
  const router = useRouter();

  useEffect(() => {
    let userExist;
    let userArray = [];
    async function checkforUser() {
      const findUser = query(
        collection(db, 'users'),
        where('username', '==', authUser.nickname)
      );
      const unsub = await onSnapshot(findUser, (snapshot) => {
        snapshot.forEach((doc) => {
          userArray.push(doc.data());
        });
        userExist = userArray[0];
        if (userExist) {
          router.push('/goals');
        }
      });
      return () => unsub();
    }
    checkforUser();
  }, []);

  //Collect user inputs and send to Firebase
  async function setProfile(e) {
    e.preventDefault();
    const userProfile = {
      first_name: firstName,
      focus_statement: focus,
      life_mission_statement: life,
      profile_pic: authUser.picture,
      username: username,
    };
    await setDoc(doc(db, 'users', authUser.nickname), userProfile);
    router.push('/goals');
  }

  return (
    <section className="flex flex-col gap-4 items-center h-screen">
      <h1>Welcome {authUser.name}</h1>
      <h2>Let&apos;s capture your goals</h2>
      <form className="flex flex-col gap-2">
        <label htmlFor="name">First Name: </label>
        <input
          type="text"
          id="name"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="focus">Focus Statement: </label>
        <input
          className="md:w-96 w-72"
          type="text"
          id="focus"
          placeholder="A sentence or two you can repeat every day"
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
        />
        <label htmlFor="life">Life Mission Statement: </label>
        <input
          type="text"
          id="life"
          placeholder="One sentence of your ultimate goal"
          value={life}
          onChange={(e) => setLife(e.target.value)}
        />
        <button
          className="my-4 p-2 border border-primary rounded hover:bg-cool-blue hover:border-cool-blue"
          onClick={setProfile}
        >
          Set Goal Profile
        </button>
      </form>
    </section>
  );
}

export default InitialCapture;
