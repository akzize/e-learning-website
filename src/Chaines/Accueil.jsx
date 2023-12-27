import { useEffect, useState } from "react";
import CustomiseHook from "./CustomiseHook";
import { Link } from "react-router-dom";

const Accueil = () => {


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
        <div className='conatiner d-flex flex-column justify-content-center p-5 '>
            <div className="m-3 text-center" >

  <marquee behavior="alternate"><h1><q>Qu'est-ce que tu vas apprendre aujourd'hui ?!</q></h1></marquee>

                
            </div>

            <input className='form-control p-3 text-center text-primary  rounded-5 border-2 border-warning ' type='text' placeholder="Exemple :  PHP CS5 JS ..." />
            <div className="conatiner d-flex flex-column justify-content-center p-5 mt-0 m-5">

                <button className="btn btn-outline-success text-light border-light border-3 w-25 align-self-center rounded-5">Rechercher</button>
            </div>



            <hr className="" /><h1 className="align-self-center mb-5 text-bold"><q>les cours les plus vues</q></h1>






            <div className="mt-5 row m-2">

                {
                    obj1.map((val, ind) => (
                        <Link to={"/videos/"+val.id} key={ind} className="col-md-4  p-2">


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
    )
}

export default Accueil
