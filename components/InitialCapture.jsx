import { useUser } from '@auth0/nextjs-auth0';
import {
  collection,
  onSnapshot,
  doc
} from 'firebase/firestore';
import { db } from '../firebase/clientApp.js';
import { useEffect, useState } from "react";

function InitialCapture({authUser}) {
    //TODO: setup varibles for inputs

    //TODO: create functions to handle input changes

    //TODO: Create new document in user collection of Firebase setting document ID to auth0 username

    //TODO: Collect user inputs and send to Firebase
    return (
            <section>
            <h1>Welcome {authUser.name}</h1>
            <h2>Let&apos;s capture your goals</h2>
            <form action="">
            <label htmlFor="name">First Name: </label>
            <input type="text" id='name' placeholder='First Name'/>
            <label htmlFor="life">Life Mission Statement: </label>
            <input type="text" id='focus' placeholder='A sentence or two you can repeat every day'/>
            <label htmlFor="life">Life Mission Statement: </label>
            <input type="text" id='life' placeholder='One sentence of your ultimate goal' />
            <button onClick>Set Goal Profile</button>
            </form>

            </section>
    )
}

export default InitialCapture