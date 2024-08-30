import React, {StrictMode} from "react";
import ReactDOM from "react-dom";
import "./style.css";

const skills = [
	{
		skill: "HTML+CSS",
		level: "advanced",
		color: "#2662EA"
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "#EFD81D"
	},
	{
		skill: "Web Design",
		level: "advanced",
		color: "#C3DCAF"
	},
	{
		skill: "Git and GitHub",
		level: "intermediate",
		color: "#E84F33"
	},
	{
		skill: "React",
		level: "advanced",
		color: "#60DAFB"
	},
	{
		skill: "Svelte",
		level: "beginner",
		color: "#FF3B00"
	}
];

function App() {
	return (<div className="card">
		<Avatar/>
		<div className="data">
			<Intro/>
			<SkillList/>
		</div>
	</div>);
}

function Avatar() {
	return <img className="avatar" src="profilePicture.jpg" alt="profilePicture"/>;
}

function Intro() {
	return (
		<div>
			<h1>Md. Shalahur Rahman</h1>
			<p>
				Full-stack web developer at DSi. When not coding or
				preparing a course, I like to sleep, to cook (and eat), or to
				just enjoy the sun at the beach.
			</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((item) => (
				<Skill skill={item.skill} level={item.level} color={item.color}></Skill>
			))}
		</div>
	);
}

function Skill({skill, color, level}) {
	return (
		<div className="skill" style={{backgroundColor: color}}>
			<span>{skill}</span>
			<span>
				{level === "beginner" && "👶"}
				{level === "intermediate" && "👍"}
				{level === "advanced" && "💪"}
			</span>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StrictMode>
	<App/>
</StrictMode>);
