import Head from 'next/head';
import Image from 'next/image';
import Goal from '../components/Goal';
import GoalList from '../components/GoalList';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/clientApp.js';
import { useEffect, useState } from "react";

function Goals() {
  const [sessionUserName, setSessionUserName] = useState('BegottenSon');
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('VHw0VazeFRB5ZelyJiuU')
  let userArray = [];

  useEffect(() => {
    const findUser = query(
      collection(db, 'users'),
      where('username', '==', sessionUserName)
    );
    const unsub = onSnapshot(findUser, (snapshot) => {
      snapshot.forEach((doc) => {
        userArray.push(doc.data());
      });
      let userResult = userArray[0];
      setUser(userResult)
    })
    return () => unsub()
  }, [])

  let name = 'Daniel';
  return (
    <main>
      <Head>
        <title>{name}&apos;s Goals</title>
      </Head>

      <h1 className="text-3xl text-center">
        Focus {user.first_name}, Here&apos;s Your Goals!
      </h1>
      <section className=" flex flex-col gap-8 h-screen md:h-96 m-3 border-gray-200 border rounded-xl bg-gradient-to-r from-gray-800 to-secondary overflow-y-scroll md:flex-row">
        <Image
          className="md:object-cover object-scale-down "
          src="/BSon_transp.png"
          alt="Begotten Son"
          height={1000}
          width={600}
        />
        <article className="grid gap-y-3 pr-3 overflow-y-scroll max-w-prose m-3 my-0">
          <h3 className='text-center md:text-left'>LIFE MISSION STATEMENT:</h3>
          <p>{user.life_mission_statement}</p>
          <hr/>
          <h3 className='text-center md:text-left'>FOCUS STATEMENT:</h3>
          <p >
            {user.focus_statement}
          </p>
          <hr/>
          <h3 className='text-center md:text-left'>GOALS:</h3>
          <GoalList 
          user={user}
          userId={userId}
          />
        </article>
      </section>
    </main>
  );
}

export default Goals;
