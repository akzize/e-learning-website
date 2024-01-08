import React from "react";
import { Badge, Button } from "react-bootstrap";
import { BsPencil, BsTrash, BsTrash2Fill, BsTrashFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";

const NotesList = () => {
	const notes = [
		{
			id: 1,
			time: "10:00",
			videoTitle: "Introduction to React",
			content: "This is the first note",
		},
		{
			id: 2,
			time: "11:30",
			videoTitle: "State Management in React",
			content:
				"This is the second note This is the second noteThis is the second noteThis is the second noteThis is the second note",
		},
		// Add more dummy notes here...
	];
	return (
		<div>
            <h1 className="h5 my-4">Notes:</h1>
			{notes.map((note) => (
				<div key={note.id} className="note-card my-1 p-1 d-flex align-items-start gap-2 rounded rounded-1 ">
					<Badge variant="info" pill>{note.time}</Badge>
					{/* <p>Time: {note.time}</p> */}
					<div className="border w-100 p-2">
						<div className="d-flex justify-content-between ">
							<div className="head d-flex justify-content-center gap-1 align-items-center align-align-content-center fw-bolder ">
								<p>Video Title: {note.videoTitle}</p>
							</div>
							<div className="actions d-flex gap-2">
                                <FaPen className="text-success "/>
								<BsTrashFill className="text-danger"/>
							</div>
						</div>
						<p>Note Content: {note.content}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default NotesList;
