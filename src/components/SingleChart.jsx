import React, { Component } from "react";

class SingleChart extends Component {
	state = {};
	render() {
		return (
			<div className="single-chart">
				<svg viewBox="0 0 36 36" className="circular-chart blue">
					<path
						class="circle-bg"
						d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
					/>
					<path
						class="circle"
						id="cr"
						stroke-dasharray="10, 100"
						d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
					/>
					<text x="18" y="20.35" class="percentage" id="txt"></text>
				</svg>
			</div>
		);
	}
}

export default SingleChart;
