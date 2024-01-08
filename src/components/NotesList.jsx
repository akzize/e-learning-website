import { addDoc, collection, deleteDoc, deleteField, doc, documentId, setDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { BsPencil, BsTrash, BsTrash2Fill, BsTrashFill } from "react-icons/bs";
import { FaPen, FaSave } from "react-icons/fa";
import { Node } from "slate";
import { db } from "../firebase-config";

const NotesList = ({ notes }) => {
	// for edited note
	const [value, setValue] = useState('');
	// active input
	const [activeInput, setActiveInput] = useState(false);

	// console.log("---------------------------------");
	// console.log(notes);
	// const textContent = notes.map((note) => note.title);
	// console.log(textContent);
	// const content = textContent.map((node) => Node.string(node)).join("\n");
	// console.log(content);
	// const notes = [
	// 	{
	// 		id: 1,
	// 		time: "10:00",
	// 		videoTitle: "Introduction to React",
	// 		content: "This is the first note",
	// 	},
	// 	{
	// 		id: 2,
	// 		time: "11:30",
	// 		videoTitle: "State Management in React",
	// 		content:
	// 			"This is the second note This is the second noteThis is the second noteThis is the second noteThis is the second note",
	// 	},
	// 	// Add more dummy notes here...
	// ];

	const handleInputClick = async (id) => {
		// edit in database firebase
		const input = document.getElementById(`${id}`);
		input.removeAttribute("disabled")
		setActiveInput(true);
		// document.querySelector(`#${id}`).disabled = !activeInput;



	}

	const handleSaveClick = async (id, videoID) => {
		// edit in database firebase
		const input = document.getElementById(`${id}`);

		try {
			const doc1 = {
				title: value,
				videoID: videoID,
			};

			const coll = collection(db, "notes");

			const docRef = doc(coll, id);

			// console.log(docRef);
			await setDoc(docRef, doc1);
			// 	title: content,
			// 	videoID: currentvideo,
			// });
			// setValue("");
		} catch (err) {
			// alert(err);
			console.log(err);
		}
		setActiveInput(false);
		input.setAttribute("disabled", true)
	}

	const handleDeleteClick = async (id) => {
		if (confirm('voulez-vous supprimer cette note')) {

			await deleteDoc(doc(db, "notes", id));


		}

	}

	return (
		<div>
			<h1 className="h5 my-4">Notes:</h1>
			{notes.map((note) => (
				<div
					key={note.id}
					className="note-card my-1 p-1 d-flex align-items-start gap-2 rounded rounded-1 "
				>
					{/* <Badge variant="info" pill>
						{note.time}
					</Badge> */}
					{/* <p>Time: {note.time}</p> */}
					<div className="border w-100 p-2">
						<div className="d-flex justify-content-between ">
							<div className="head d-flex justify-content-center gap-1 align-items-center align-align-content-center fw-bolder ">
								<p>Video Title: {note.videoID}</p>
							</div>
							<div className="actions d-flex gap-2">
								{!activeInput ? (
									<FaPen
										className="text-success "
										onClick={() => handleInputClick(note.id)}
									/>
								) : (
									<FaSave onClick={() => handleSaveClick(note.id, note.videoID)} />
								)}
								<BsTrashFill className="text-danger" onClick={() => handleDeleteClick(note.id)} />
							</div>
						</div>
						{/* <p>Note Content: {note.title}</p> */}
						<input
							type="text"
							value={note.title}
							id={note.id}
							className="form-control "
							disabled
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default NotesList;
