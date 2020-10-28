import React, { Component } from "react";
import Form2 from "./Form2";
import SingleChart from "./SingleChart";

class PI extends Component {
	state = {};
	render() {
		return (
			<div className="">
				<SingleChart />
				<h1>Your Productivity Index</h1>
				<p>
					In the logistics industry,where you have to work across time zones,
					and more recently, work from home this is a good productivity index.
				</p>
				<p>
					However, we can help you beat this index with our easy-to-use,
					always-on e-solutions.
				</p>
				<p>Learn more about these e-solutions in our digital brochure.</p>
				<br />
				<Form2 />
			</div>
		);
	}
}

export default PI;
