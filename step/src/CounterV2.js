import {useState} from "react";

export default function CounterV2() {
	return <CounterComponentV2/>;
}

function CounterComponentV2() {

	const [count, setCount] = useState(0)
	const [step, setStep] = useState(1)

	function handleReset() {
		setCount(0);
		setStep(1);
	}

	const date = new Date();
	date.setTime(date.getDate() + count);
	return (
		<div className="center">

			<input type="range" min="0" max="10" value={step} onChange={e => setStep(Number(e.target.value))}/>
			<span>Step: {step}</span>
			<div>
				<button onClick={() => setCount((c) => c - step)}>-</button>
				<input type="text" value={count} onChange={e => setCount(Number(e.target.value))}/>
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
			{(step !== 1 || count !== 0) ? (
				<div>
					<button onClick={handleReset}>Reset</button>
				</div>
			) : null}
		</div>
	)
}
