import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Form, Button, InputGroup } from 'react-bootstrap';
import OPENAI_API_KEY from '../config/openai';
import OpenAI from 'openai';

const ChatComponent = () => {
	const [question, setQuestion] = useState("");
	const [response, setResponse] = useState("");
	// const [question, SetQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [chatData, setChatData] = useState([
        { id: 1, sender: "AI", message: "Hello" },
        { id: 2, sender: "You", message: "Hi there!" },
    ]);


	// handling chat gpt
    const openai = new OpenAI({
		apiKey: OPENAI_API_KEY,
		dangerouslyAllowBrowser: true,
	});

    async function main() {
		// Setquestion(
		// 	notes
		// 		.filter((elem) => elem.videoID == ved1)
		// 		.map((note) => note.title)
		// 		.join(" - ")
		// );
		// console.log(question);

		try {
            if (question) {        
			const completion =
            await openai.chat.completions.create({
					messages: [
						{
							role: "system",
							// content: `generer un resumer à partir de ces notes et commencer par en resumé de ses notes : ${question}`,
							content: `You are a helpful assistant.`,
						},
						{
							role: "user",
							content: question,
						},
					],
					model: "gpt-3.5-turbo",
					// limiting the number of tokens returned
					max_tokens: 100,
				});

			// question && setResponse(completion.choices[0].message.content);
        // setChatData([
		// 	...chatData,
		// 	{ id: chatData.length + 2, sender: "You", message: question },
		// ]);

setChatData((prevChatData) => [
	...prevChatData,
	{
		id: prevChatData.length + 1,
		sender: "AI",
		message: completion.choices[0].message.content,
	},
]);
    }
		} catch (error) {
			console.error("Error fetching OpenAI completion:", error);
		}
	}
    
	const handleInputChange = (e) => {
		setQuestion(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Handle the submission of the message input
        setChatData((prevChatData) => [
			...prevChatData,
			{ id: prevChatData.length + 1, sender: "you", message: question },
		]);
        main();

        setQuestion("");
        console.log(chatData);
	};

	return (
		<Container>
			<Row>
				<Col>
					<ListGroup>
						{chatData.map((chat, index) => (
							<ListGroup.Item key={index}>
								<div className="user-info d-flex gap-2 align-items-center">
									<div
										className="img bg-info d-flex justify-content-center align-items-center "
										style={{
											borderRadius: "50%",
											width: 30,
											height: 30,
										}}
									>
										<span className="fw-bolder text-white">
											{chat.sender == "AI"
												? "AI"
												: chat.sender.charAt(0)}
										</span>
									</div>
									<strong>{chat.sender}: </strong>
								</div>
								<p
									className=""
									style={{ paddingLeft: "2.4rem" }}
								>
									{chat.message}
								</p>
							</ListGroup.Item>
						))}
					</ListGroup>
					<Form onSubmit={handleSubmit} className="my-2 bg-dark">
						<InputGroup className="mb-3" controlId="question">
							<Form.Control
								placeholder="write your quetion here ..."
								aria-label="write your quetion here ..."
								aria-describedby="basic-addon2"
								value={question}
								onChange={handleInputChange}
								onKeyPress={(e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										handleSubmit(e);
									}
								}}
								as="textarea"
							/>
							<Button
								variant="outline-secondary"
								id="button-addon2"
								onclick={handleSubmit}
							>
								send
							</Button>
						</InputGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default ChatComponent;
