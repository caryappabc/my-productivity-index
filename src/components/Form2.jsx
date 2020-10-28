import React, { Component } from "react";

class Form2 extends Component {
	render() {
		return (
			<div>
				<form>
					<input placeholder="Enter email id" required />
					<br />
					<input type="hidden" id="urldata" name="urldata" />
					<input type="hidden" id="pageurl" name="pageurl" />
					<input type="submit" value="GET BROCHURE" />
				</form>
			</div>
		);
	}
}

export default Form2;
