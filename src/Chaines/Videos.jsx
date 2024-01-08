import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useParams } from "react-router-dom";
import CustomiseHook from "./CustomiseHook";
import ReactPlayer from "react-player";

import OPENAI_API_KEY from "../config/openai";
import OpenAI from "openai";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
// bs5 compoenets
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { MdAddCircle } from "react-icons/md";
import SlateEditor from "../components/SlateEditor";
import NotesList from "../components/NotesList";
import ChatComponent from "../components/ChatSection";


const Videos = () => {
	const [notes, setnotes] = useState([]);
	const [question, Setquestion] = useState("");
	const [response, setResponse] = useState("");
	const [playlists, SetPlaylists] = useState([]);
	
	// action for showing the note form
	const [showNoteForm, setShowNoteForm] = useState(false);

	const { id } = useParams();
	const UsersCollectionRef = collection(db, "notes");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getDocs(UsersCollectionRef);
				setnotes(
					data.docs.map((elem) => ({ ...elem.data(), id: elem.id }))
				);
			} catch (error) {
				console.error("Error fetching data from Firestore:", error);
			}
		};

		fetchData();
	}, [UsersCollectionRef]);

	// console.log(notes);

	var options = {
		params: {
			part: "snippet",
			playlistId: "PLrSOXFDHBtfFuZttC17M-jNpKnzUL5Adc",
			maxResults: "50",
		},

		headers: {
			"X-RapidAPI-Key": "",
			"X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
		},
	};

	const url = "https://youtube-v311.p.rapidapi.com/playlistItems/";

	useEffect(() => {
		options.params.playlistId = id;
		CustomiseHook(url, options)
			.then((res) => res.data)
			.then((res) => SetPlaylists(res));
	}, [id]);

	let ved1 = playlists.items
		? playlists.items[0].snippet.resourceId.videoId
		: null;
	// console.log(ved1);

	// useEffect(() => {
	const openai = new OpenAI({
		apiKey: OPENAI_API_KEY,
		dangerouslyAllowBrowser: true,
	});

	async function main() {
		Setquestion(
			notes
				.filter((elem) => elem.videoID == ved1)
				.map((note) => note.title)
				.join(" - ")
		);
		// console.log(question);

		try {
			const completion =
				question &&
				(await openai.chat.completions.create({
					messages: [
						{
							role: "system",
							content: `generer un resumer à partir de ces notes et commencer par en resumé de ses notes : ${question}`,
						},
					],
					model: "gpt-3.5-turbo",
				}));

			question && setResponse(completion.choices[0].message.content);
		} catch (error) {
			console.error("Error fetching OpenAI completion:", error);
		}
	}

	// main();
	// }, []);

	return (
		<div className="d-flex gap-3  p-2 jutify-content-center bg-dark mt-5">
			<div className="col-md-9 currentvideo">
				<ReactPlayer
					controls
					className="react-player w-100"
					url={`https://www.youtube.com/watch?v=${ved1}`}
				/>
				<div className="ved-options">
					<Tabs
						defaultActiveKey="overview"
						id="uncontrolled-tab-example"
						className="my-3"
					>
						<Tab eventKey="overview" title="Overview" className="">
							<div className="text-bold text-light text-header bg-dark rounded-1 my-2 p-3">
								<h3>test title</h3>
								et nesciunt! Assumenda sed reprehenderit ducimus
								similique explicabo eligendi dolores cumque
								magnam laudantium praesentium. Quod odio
								voluptatibus perspiciatis impedit harum
								pariatur, nemo facilis, aperiam asperiores
								quidem ex beatae porro? Error porro libero autem
								blanditiis, facere doloremque vitae culpa
								laborum maiores aut magni. Voluptatem quae earum
								fugit inventore assumenda. Quasi error optio
								similique animi fugiat architecto voluptates,
								recusandae praesentium eligendi.
							</div>
						</Tab>
						<Tab eventKey="notes" title="Notes">
							<div className="notes-list">
								{!showNoteForm ? (
									<button
										onClick={() => setShowNoteForm(true)}
										className="d-flex justify-content-between p-2 border align-content-center align-items-center bg-secondary text-dark fw-bolder text-capitalize w-100"
									>
										<span className="align-middle ">
											add new note at{" "}
											<span className=""> 00:00</span>
										</span>
										{/* <i className="bi bi-plus-circle-fill"></i> */}
										<MdAddCircle className="fs-3 " />
									</button>
								) : (
									<SlateEditor
										setShowNoteForm={setShowNoteForm}
									/>
									
								)}
								<NotesList />
							</div>
						</Tab>
						<Tab eventKey="q&a" title="Ask Question">
							<ChatComponent />
						</Tab>
					</Tabs>
				</div>

				{/* <input
					type="text"
					onChange={(e) => Setquestion(e.target.value)}
				/>
				<button onClick={main} className="btn btn-success w-25">
					Voir le résumé
				</button> */}
				{/* <div className='border p-3 fw-bold bg-light rounded-2 m-2 text-dark fs-5'>
                    <details>
                        <summary>Votre Notes </summary>
                        <ul>

                            {notes.filter(elem=>elem.videoID==ved1).map((val, key) => (
                                <li key={key}>{val.title}</li>
                            ))}
                        </ul>
                    </details>

                </div>
                <div className='border p-3 fw-bold bg-light rounded-2 m-2 text-dark fs-5'>

                    <details>
                        <summary>Voir le résumé </summary>
                        {response}
                    </details>
                </div> */}
			</div>

			<div className="col-md-3">
				{playlists.items &&
					playlists.items.map((play, ind) => (
						<div className="row m-0" key={ind}>
							<img
								className="col-md-7  rounded-2"
								src={play?.snippet.thumbnails.high.url}
								alt=""
							/>
							<p className="col-md-5 text-light">
								{play?.snippet.title}
								<i className="fa-solid fa-circle-check text-white-50 check ms-2"></i>
							</p>
							adqwsq
						</div>
					))}
			</div>
		</div>
	);
};

export default Videos;
