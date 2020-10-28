import React, { Component } from "react";
import Question from "./Question";
import Button from "./Button";
class Form extends Component {
	state = {
		Q: [
			"How long does it usually take you to gather information and documents regarding your shipment?",
			"How do you access your logistics invoices today?",
			"What do you do if you disagree with the charges in your logistics invoice?",
			"How do you search for your Demurrage and Detention information?",
			"How much effort does it take to find the current location of your shipment?",
		],
		o1: ["One hour", "10 minutes", "A few seconds"],
		o2: [
			"A physical invoice is delivered to my office",
			"I call my carrier’s customer service",
			"I e-mail my carrier’s local representative",
			"I download it online",
		],
		o3: [
			"I call my carrier’s customer service to review the invoice",
			"I e-mail my carrier’s local representative, requesting a review",
			"I dispute the invoice online, in just a few clicks",
		],
		o4: [
			"By calling my carrier’s customer service",
			"By e-mailing my carrier’s local representative",
			"By logging on to my carrier’s website",
		],
		o5: [
			"A couple of phone calls",
			"A couple of e-mails",
			"A couple of clicks online",
		],
		img: [
			"http://image.maersk.com/lib/fe5d15707c62017d701c/m/20/3b0d43f5-cdd5-4136-90ee-801f5ebc089a.png",
			"http://image.maersk.com/lib/fe5d15707c62017d701c/m/20/ba910f42-67ee-4f20-b819-80c1164cea72.png",
			"http://image.maersk.com/lib/fe5d15707c62017d701c/m/20/5b881c70-cb3e-4a92-9380-ff0680b884b6.png",
			"http://image.maersk.com/lib/fe5d15707c62017d701c/m/20/760722dc-f519-4fcd-846e-530d17dfe1b2.png",
			"http://image.maersk.com/lib/fe5d15707c62017d701c/m/20/d9f6a3aa-9869-47f2-bbf4-b2fbbadf0009.png",
		],
	};

	render() {
		return (
			<div>
				<form>
					<Question
						Q={this.state.Q[0]}
						O={this.state.o1}
						name="Q1"
						class="Q-container one"
						src={this.state.img[0]}
					/>
					<Question
						Q={this.state.Q[1]}
						O={this.state.o2}
						name="Q2"
						class="Q-container two"
						src={this.state.img[1]}
					/>
					<Question
						Q={this.state.Q[2]}
						O={this.state.o3}
						name="Q3"
						class="Q-container three"
						src={this.state.img[2]}
					/>
					<Question
						Q={this.state.Q[3]}
						O={this.state.o4}
						name="Q4"
						class="Q-container four"
						src={this.state.img[3]}
					/>
					<Question
						Q={this.state.Q[4]}
						O={this.state.o5}
						name="Q5"
						class="Q-container five"
						src={this.state.img[4]}
					/>
					<Button />
				</form>
			</div>
		);
	}
}

export default Form;
