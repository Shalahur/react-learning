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
		setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
	}

	function handleClearList() {
		const confirm = window.confirm("Are you sure? you want to clear the list?");
		if (confirm) {
			setItems([]);
		}
	}

	return (<div className="app">
		<Logo/>
		<Form onAddItem={handleAddItem}/>
		<PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}
					 onClearList={handleClearList}/>
		<Stats items={items}/>
	</div>);
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

function PackingList({items, onDeleteItem, onToggleItem, onClearList}) {

	const [sortBy, setSortBy] = useState("input");
	let sortedItems;

	if (sortBy === "input") sortedItems = items; else if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.quantity)); else if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
	return (<div className="list">
		<ul>
			{sortedItems.map((item) => (
				<Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>))}
		</ul>

		<div className="actions">
			<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
				<option value="input">Sort by input order</option>
				<option value="description">Sort by description</option>
				<option value="packed">Sort by packed status</option>
			</select>
		</div>
		<button onClick={onClearList}>Clear all items</button>
	</div>);
}

function Item({item, onDeleteItem, onToggleItem}) {
	return (<li>
		<input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)}/>
		<span style={item.packed ? {textDecoration: "line-through"} : {}}>
				{item.quantity} {item.description}
			</span>
		<button onClick={() => onDeleteItem(item.id)}>❌</button>
	</li>);
}

function Stats({items}) {

	if (!items.length) return (<p className="stats">
		<em>
			Start adding some items to your packing list 🎈
		</em>
	</p>);

	const numItems = items.length;
	const numPacked = items.filter(item => item.packed).length;
	const percent = Math.round(numPacked / numItems * 100);

	return (<footer className="stats">
		<em>
			{percent === 100 ? "You got everything! Ready to go 🎉" : `🚗 You have ${numItems} items on your list, 
				and you already packed ${numItems}(${percent}%)`}
		</em>
	</footer>);
}
