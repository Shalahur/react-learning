const initialItems = [
	{id: 1, description: "Passports", quantity: 2, packed: false},
	{id: 2, description: "Socks", quantity: 12, packed: true},
];

export default function App() {
	return (
		<div className="app">
			<Logo/>
			<Form/>
			<PackingList/>
			<Stats/>
		</div>
	);
}

function Logo() {
	return <h1>🏝 Far Away 🚐🚐</h1>;
}

function Form() {

	function handleSubmit(e) {
		e.preventDefault();

	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3> What do you need for your 😍 trip?</h3>
			<select>
				{Array.from({length: 20}).map((_, i) => (<option key={i} value={i}>{i + 1}</option>))}
			</select>
			<input type="text" placeholder="item..."/>
			<button>Add</button>
		</form>
	);
}

function PackingList() {
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (
					<Item item={item} key={item.id}/>
				))}
			</ul>
		</div>
	);
}

function Item({item}) {
	return (
		<li>
			<span style={item.packed ? {textDecoration: "line-through"} : {}}>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
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
