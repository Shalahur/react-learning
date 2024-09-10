import {useState} from "react";

export default function App() {

	const [items, setItems] = useState([]);

	function handleAddItem(item) {
		setItems([...items, item]);
	}

	function handleDeleteItem(id) {
		setItems(items.filter(item => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? {...item, packed: !item.packed} : item));
	}

	return (
		<div className="app">
			<Logo/>
			<Form onAddItem={handleAddItem}/>
			<PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
			<Stats/>
		</div>
	);
}


function Logo() {
	return <h1>🏝 Far Away 🚐🚐</h1>;
}

function Form({onAddItem}) {

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

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3> What do you need for your 😍 trip?</h3>
			<select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
				{Array.from({length: 20}).map((_, i) => (<option key={i} value={i}>{i}</option>))}
			</select>
			<input type="text" placeholder="item..." value={description}
				   onChange={(e) => setDescription(e.target.value)}/>
			<button>Add</button>
		</form>
	);
}

function PackingList({items, onDeleteItem, onToggleItem}) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>
				))}
			</ul>
		</div>
	);
}

function Item({item, onDeleteItem, onToggleItem}) {
	return (
		<li>
			<input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}/>
			<span style={item.packed ? {textDecoration: "line-through"} : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

function Stats() {
	return (
		<footer className="stats">
			<em>🚗 You have X items on your list, and you already packed X(x%)</em>
		</footer>
	);
}
