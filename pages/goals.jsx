import Head from 'next/head';
import Image from 'next/image';
import Goal from '../components/Goal';
import GoalList from '../components/GoalList';
import { useUser } from '@auth0/nextjs-auth0';
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
import { useEffect, useState } from 'react';

function Goals() {
  const [sessionUserName, setSessionUserName] = useState('BegottenSon');
  //TODO: change auth user to main user
  const { user, error, isLoading } = useUser();
  const [activeUser, setActiveUser] = useState('');
  const [userId, setUserId] = useState('');
  let userArray = [];

  useEffect(() => {
    if (user) {
      setUserId(user.nickname);
      const findUser = query(
        collection(db, 'users'),
        where('username', '==', user.nickname)
      );
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
    if (!activeUser) {
      setActiveUser({
        first_name: 'User',
        life_mission_statement:
          'Set your mission statement on your profile page',
        focus_statement: 'set your focus statement on your profile page',
      });
    }
  }, [activeUser]);

  return (
    <main>
      {activeUser && (
        <>
          <Head>
            <title>{activeUser.first_name}&apos;s Goals</title>
          </Head>

          <h1 className="text-3xl text-center">
            Focus {activeUser.first_name}, Here&apos;s Your Goals!
          </h1>
          <section className="flex flex-col md:gap-8 gap-2 h-screen md:h-full m-3 border-gray-200 border rounded-xl bg-gradient-to-r from-gray-800 to-secondary overflow-y-scroll md:flex-row">
            <Image
              className="md:object-cover object-scale-down "
              src="/lady-user.png"
              alt="Begotten Son"
              height={650}
              width={500}
            />
            <article className="grid gap-y-3 pr-3 overflow-y-scroll max-w-prose md:w-full m-3 my-0">
              <h3 className="text-center md:text-left">
                LIFE MISSION STATEMENT:
              </h3>
              <p className='text-lg'>{activeUser.life_mission_statement}</p>
              <hr />
              <h3 className="text-center md:text-left">FOCUS STATEMENT:</h3>
              <p className='text-lg'>{activeUser.focus_statement}</p>
              <hr />
              <h3 className="text-center md:text-left">GOALS:</h3>
              <GoalList user={activeUser} userId={userId} />
            </article>
          </section>
        </>
      )}
    </main>
  );
}

export default Goals;
