import { useEffect, useState } from "react";
import CustomiseHook from "./CustomiseHook";
import { Link } from "react-router-dom";
import Header from "../Master/Header";
import Footer from "../Master/Footer";

const Accueil = () => {
    // console.log(process.env);

    const obj1 = [
        {
            id: "PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD",
            title: "Mastering PHP",
            description: "Apprendre la programmation en PHP de zéro du héros",
            imageSource: "https://cdn.pixabay.com/photo/2013/07/12/16/35/php-151199_1280.png",
            nombreVideos: 20,
            lengthFormation: "300 min"
        },

        {
            id: "PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa",
            title: "La chaine devops",
            description: "Apprendre les principes de DevOps",
            imageSource: "https://www.weodeo.com/wp-content/uploads/2023/02/DevOps-1536x922.webp",
            nombreVideos: 15,
            lengthFormation: "250 min"
        },

        {
            id: "PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU",
            title: "HTML5 & CSS3",
            description: "Création de sites web avec HTML5 et CSS3",
            imageSource: "https://www.techrepublic.com/wp-content/uploads/2022/07/html-css-beginners.jpg",
            nombreVideos: 25,
            lengthFormation: "350 min"
        },

        {
            id: 'PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37',
            title: "Apprendre JavaScript",
            description: "Découvrir le langage de programmation JavaScript",
            imageSource: "https://cdn.pixabay.com/photo/2022/03/21/21/44/file-7084007_1280.png",
            nombreVideos: 30,
            lengthFormation: "400 min"
        },

        {
            id: 'PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK',
            title: "Apprendre React-Redux",
            description: "Développement d'applications avec React et Redux",
            imageSource: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
            nombreVideos: 18,
            lengthFormation: "270 min"
        },

        {
            id: "PLS1QulWo1RIb9WVQGJ_vh-RQusbZgO_As",
            title: "Apprendre Linux",
            description: "Maîtriser le système d'exploitation Linux",
            imageSource: "https://cdn.pixabay.com/photo/2016/12/11/20/44/background-1900329_640.jpg",
            nombreVideos: 22,
            lengthFormation: "320 min"
        },
    ];










    return (
        <div >
            <div className='conatiner d-flex flex-column justify-content-center pt-5 '>


                <div className="container1 d-flex flex-column ">

                    <div className="m-3 text-center mt-5" >

                        <marquee behavior="alternate"><h1><q>Qu'est-ce que tu vas apprendre aujourd'hui ?!</q></h1></marquee>


                    </div>

                    <input className='form-control p-3 text-center text-primary  rounded-5 border-2 w-75 align-self-center ' type='text' placeholder="Exemple :  PHP CS5 JS ..." />
                    <div className="conatiner d-flex flex-column justify-content-center p-5 mt-0 m-5">

                        <button className="btn btn-outline-success text-light border-light border-3 w-25 align-self-center rounded-5">Rechercher</button>
                    </div>
                    <div className="row mx-5 mb-3 text-light  bold ">
                        <div className="col-3">
                        <h2>50 courses</h2>
                        </div>
                        <div className="col-3">
                        <h2>50 Etudiant</h2>
                        </div>
                        <div className="col-3">
                        <h2>5000 Heures</h2>
                        </div>
                        <div className="col-3">
                        <h2>5 Demains</h2>
                        </div>
                    </div>
                </div>



                <hr className="" /><h1 className="align-self-center mb-1 text-bold text-info"><q>les cours les plus vues</q></h1>






                <div className="row p-5">

                    {
                        obj1.map((val, ind) => (
                            <Link to={"/videos/" + val.id} key={ind} className="col-md-4  p-2">


                                <div>
                                    <div className="card card-block text-center p-2 w-100">
                                        <div className="card-header">

                                            <img className="rounded-2" src={val.imageSource} alt={val.title} />
                                        </div>

                                        <div className="card-body">

                                            <h5 className="card-title mt-2 mb-2  mt-3">{val.title}</h5>
                                            <p className="card-text ">
                                                {val.description}
                                                <br />
                                                <span className="text-bold text-success">length : {val.lengthFormation}</span><br />
                                                <span className="text-bold text-success">Nombre Videos : {val.nombreVideos}</span>
                                            </p>
                                            <div className="">
                                                <button className="btn btn-primary">Voir Plus</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        ))
                    }



                </div>
            </div>
        </div>
    )
}

export default Accueil
