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




const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState({});


    const Conneceter = async () => {
        if (users.length > 0 && users[0].login === email && users[0].password === password) {
            location = "/accueil";
        }
        else {
            console.error("la connexion est echoue");
        }
    }

    const UsersCollectionRef = collection(db, "users")


    useEffect(() => {
        const getUsersData = async () => {
            const data = await getDocs(
				UsersCollectionRef,
				"pN1EsxYk2VTmJSR2sYAR"
			);
            setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
        }

        getUsersData()
        console.log(users[0]);
    }, [])


    return (
        <div className=' container d-flex'>
            <div className='d-flextext-dark justify-item-center m-5 p-5 w-50  '>
                <img src="https://cdn.pixabay.com/photo/2020/02/17/18/12/office-4857268_1280.jpg" className='w-100 rounded-5 h-100' alt="" />
            </div>
            <div className='d-flex flex-column text-dark justify-item-center m-5 p-5 w-50  '>
                <div className='d-flex justify-content-center p-2 '>
                    <label className='form-label mx-4' > Email </label>
                    <input className='text-black form-control' type="text" placeholder='Email' onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className='d-flex justify-content-center p-2 '>
                    <label className='form-label mx-3'> Password </label>
                    <input className='text-black form-control' type="text" placeholder='password ***' onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <button onClick={Conneceter} className='btn btn-primary w-50 mx-5'>Connecter</button>
            </div>
        </div>
    )
}

export default Login
