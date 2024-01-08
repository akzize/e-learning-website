import React, { useMemo, useState, useCallback } from "react";
import { createEditor, Transforms, Editor, Text, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";

// icons
import {
	FaAlignJustify,
	FaAlignLeft,
	FaAlignRight,
	FaBold,
	FaCode,
	FaItalic,
	FaListUl,
} from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function SlateEditor({ setShowNoteForm, currentvideo }) {
	const editor = useMemo(() => withReact(createEditor()), []);

	const initialValue = [
		{
			type: "paragraph",
			children: [{ text: "A line of text in a paragraph." }],
		},
	];
	const [value, setValue] = useState(initialValue);

	const renderElement = useCallback((props) => <Element {...props} />, []);
	const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

	// -------------------add note to firebase-------------------
	const handleAddNote = async () => {
		// alert()
		// e.preventDefault()
		// const content = Node.string(value);
		// console.log(Node.string(value));
		const content = value.map((node) => Node.string(node)).join("\n");
		// console.log(textContent);
		try {
			await addDoc(collection(db, "notes"), {
				title: content,
				videoID: currentvideo,
			});
			setValue("");
		} catch (err) {
			// alert(err);
			console.log(err);
		}
		setShowNoteForm(false)

	};
	// -------------------add note to firebase-------------------

	return (
		<div className="p-1 my-1">
			<div className="border py-3 px-2">
				<Slate
					editor={editor}
					value={value}
					onChange={(value) => setValue(value)}
					initialValue={initialValue}
				>
					<div className="">
						<div className="d-flex gap-2 fs-5 text-black ">
							<FaBold
								onMouseDown={(event) => {
									event.preventDefault();
									toggleFormat(editor, "bold");
								}}
							/>
							<FaItalic
								onMouseDown={(event) => {
									event.preventDefault();
									toggleFormat(editor, "italic");
								}}
							/>
							<FaCode
								onMouseDown={(event) => {
									event.preventDefault();
									toggleCodeBlock(editor, "code");
								}}
							/>
							<FaAlignLeft
								onMouseDown={(event) => {
									event.preventDefault();
									toggleBlock(editor, "align-left");
								}}
							/>
							<FaAlignJustify
								onMouseDown={(event) => {
									event.preventDefault();
									toggleBlock(editor, "align-center");
								}}
							/>
							<FaAlignRight
								onMouseDown={(event) => {
									event.preventDefault();
									toggleBlock(editor, "align-right");
								}}
							/>
							<FaListUl
								onMouseDown={(event) => {
									event.preventDefault();
									toggleBlock(editor, "list-item");
								}}
							/>
						</div>
					</div>
					<Editable
						className="p-2 mt-3 lh-base"
						renderElement={renderElement}
						renderLeaf={renderLeaf}
						placeholder="Enter some text..."
					/>
				</Slate>
			</div>
			<div className="actions float-end p-2 d-flex gap-2">
				<button
					className="btn btn-primary rounded-0 "
					onClick={handleAddNote}
				>
					Save
				</button>
				<button
					className="btn btn-secondary rounded-0 "
					onClick={() => setShowNoteForm(false)}
				>
					Cancel
				</button>
			</div>
		</div>
	);
}

const toggleFormat = (editor, format) => {
	const isActive = isFormatActive(editor, format);
	Transforms.setNodes(
		editor,
		{ [format]: isActive ? null : true },
		{ match: (n) => Text.isText(n), split: true }
	);
};

const isFormatActive = (editor, format) => {
	const [match] = Editor.nodes(editor, {
		match: (n) => n[format] === true,
		universal: true,
	});
	return !!match;
};

const toggleBlock = (editor, format) => {
	const isActive = isBlockActive(editor, format);
	Transforms.setNodes(
		editor,
		{ align: isActive ? null : format },
		{ match: (n) => Editor.isBlock(editor, n) }
	);
};

const isBlockActive = (editor, format) => {
	const [match] = Editor.nodes(editor, {
		match: (n) => n.align === format,
		universal: true,
	});
	return !!match;
};

const toggleCodeBlock = (editor) => {
	const [match] = Editor.nodes(editor, {
		match: (n) => n.type === "code",
		at: editor.selection, // Only consider nodes in the current selection
	});

	Transforms.setNodes(
		editor,
		{ type: match ? "paragraph" : "code" },
		{ match: (n) => Editor.isBlock(editor, n), at: editor.selection } // Only change nodes in the current selection
	);
};

const Element = ({ attributes, children, element }) => {
	let style = {};
	if (element.align === "align-left") {
		style = { textAlign: "left" };
	} else if (element.align === "align-right") {
		style = { textAlign: "right" };
	} else if (element.align === "align-center") {
		style = { textAlign: "center" };
	}

	switch (element.type) {
		case "bold":
			return (
				<strong {...attributes} style={style}>
					{children}
				</strong>
			);
		case "italic":
			return (
				<em {...attributes} style={style}>
					{children}
				</em>
			);
		case "code":
			return (
				<pre>
					<code {...attributes} style={style}>
						{children}
					</code>
				</pre>
			);
		case "list-item":
			return (
				<li {...attributes} style={style}>
					{children}
				</li>
			);
		default:
			return (
				<p {...attributes} style={style}>
					{children}
				</p>
			);
	}
};

const Leaf = ({ attributes, children, leaf }) => {
	if (leaf.bold) {
		children = <strong>{children}</strong>;
	}
	if (leaf.italic) {
		children = <em>{children}</em>;
	}

	return <span {...attributes}>{children}</span>;
};

export default SlateEditor;
