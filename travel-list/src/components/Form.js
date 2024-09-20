import {useState} from "react";

export default function Form({onAddItem}) {

	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItems = {description: description, quantity: quantity, packed: false, id: new Date()};
		console.log(newItems);
		onAddItem(newItems);
		setDescription("");
		setQuantity(1);

	}

	return (<form className="add-form" onSubmit={handleSubmit}>
		<h3> What do you need for your 😍 trip?</h3>
		<select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
			{Array.from({length: 20}).map((_, i) => (<option key={i} value={i}>{i}</option>))}
		</select>
		<input type="text" placeholder="item..." value={description}
			   onChange={(e) => setDescription(e.target.value)}/>
		<button>Add</button>
	</form>);
}
