import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (<div className="container">
		<Header></Header>
		<Menu></Menu>
		<Footer></Footer>
	</div>);
}

function Header() {
	// const style ={ color: "red", fontsize:"48px", textTransform: "uppercase"};
	const style = {};
	return (<header className="header">
		<h1 style={style}>Fast React Pizza Co.</h1>
	</header>);
}

function Menu() {
	const pizzas = pizzaData;
	// const pizzas = [];
	const pizzaCount = pizzas.length;
	return (
		<main className='menu'>
			<h2>Our menu</h2>
			{
				pizzaCount > 0 ? (
					// alternative syntex is <React.Fragment></React.Fragment>
					<>
						<p>
							Authentic italian cuisine. 6 creative dishes to choose from. All
							from our stone oven, All delicious.
						</p>
						<ul className="pizzas">
							{pizzaData.map((item, index) => (
								<Pizza pizzaObj={item} key={item.name}/>
							))}
						</ul>
					</>
				) : (<p>we're still working on our menu. Please come back later.</p>)
			}
		</main>);
}

function Pizza({pizzaObj}) {

	// if (pizzaObj.soldOut) return null;

	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name}/>
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? "SOLD OUT " : pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 8;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	return (
		<footer className="footer">{
			isOpen ? <Order closeHour={closeHour} openHour={openHour}/> : (
				<p>we are happy to welcome you between {openHour} and {closeHour}</p>)
		}</footer>
	);
	// return React.cre ateElement("footer", null, "We are currently open!");
}

// function Order(props) {// the alternative of props is below
function Order({closeHour, openHour}) {
	return <div className="order">
		<p>
			we're open from {openHour}:00 until {closeHour}:00. Come visit us or order.
		</p>
		<button className="btn">Order</button>
	</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
	<App/>
</React.StrictMode>);
