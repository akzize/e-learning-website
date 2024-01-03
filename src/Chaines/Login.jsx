import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config';
import {
    collection,
    getDocs,
    addDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { Navigate, redirect } from 'react-router-dom';
import Accueil from './Accueil';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState({});


    const Conneceter = async () => {
        if (users.length > 0 && users[0].Email === email && users[0].Password === password) {
            location = "/accueil";
        }
        else {
            console.error("la connexion est echoue");
        }
    }

    const UsersCollectionRef = collection(db, "users")


    useEffect(() => {
        const getUsersData = async () => {
            const data = await getDocs(UsersCollectionRef, "0KbkJ22Kk1B0JVTo8U3F")
            setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
        }

        getUsersData()
        console.log(users[0]);
    }, [])


    return (

        <div className=' container d-flex flex-column text-dark '>
            <div className='d-flex justify-content-center w-50 '>

                <label className='form-label mx-5' > Email </label>
                <input className='text-black form-control' type="text" placeholder='Email' onChange={(event) => { setEmail(event.target.value) }} />
            </div>
            <div className='d-flex justify-content-center w-50 p-2 '>

                <label className='form-label mx-5'> Password </label>
                <input className='text-black form-control' type="text" placeholder='password ***' onChange={(event) => { setPassword(event.target.value) }} />
            </div>

            <button onClick={Conneceter} className='btn btn-primary m-3 fs-4'>Connecter</button>
        </div>

    )
}

export default Login
