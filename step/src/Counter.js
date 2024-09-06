import {useState} from "react";

export default function Counter() {
	return <CounterComponent/>;
}

function CounterComponent() {

	const [count, setCount] = useState(0)
	const [step, setStep] = useState(0)

	const date = new Date();
	date.setTime(date.getDate() + count);
	return (
		<div className="center">
			<div>
				<button onClick={() => setStep((c) => c - 1)}>-</button>
				<span>Step: {step}</span>
				<button onClick={() => setStep((c) => c + 1)}>+</button>
			</div>

			<div>
				<button onClick={() => setCount((c) => c - step)}>-</button>
				<span>Count: {count}</span>
				<button onClick={() => setCount((c) => c + step)}>+</button>
			</div>
			<p>
				<span>{count === 0
					? "Today is"
					: count > 0
						? `${count} days from today is `
						: `${Math.abs(count)} days ago was `}</span>
				<spa>
					{date.toLocaleDateString()}
				</spa>
			</p>
		</div>
	)
}
