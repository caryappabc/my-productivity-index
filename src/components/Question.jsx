import React, { Component } from "react";

class Question extends Component {
	render() {
		return (
			<div className={this.props.class}>
				<div className="Question">
					<h3>{this.props.Q}</h3>
					<div className="radio-buttons">
						<input
							type="radio"
							id={this.props.name + "O1"}
							name={this.props.name}
							value="10"
						/>
						<label for={this.props.name + "O1"}>{this.props.O[0]}</label>
						<br />
						<input
							type="radio"
							id={this.props.name + "O2"}
							name={this.props.name}
							value="15"
						/>
						<label for={this.props.name + "O2"}>{this.props.O[1]}</label>
						<br />
						<input
							type="radio"
							id={this.props.name + "O3	"}
							name={this.props.name}
							value="20"
						/>
						<label for={this.props.name + "O3"}>{this.props.O[2]}</label>
						<br />
					</div>
				</div>
				<div classNme="Q-img">
					<img src={this.props.src} className="bg-img" alt="" />
				</div>
			</div>
		);
	}
}

export default Question;
