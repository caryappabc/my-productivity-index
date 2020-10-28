import React, { Component } from "react";

class Banner extends Component {
	state = {};
	render() {
		return (
			<div>
				<img
					class="banner"
					src="http://image.maersk.com/lib/fe5d15707c62017d701c/m/20/f76a7f94-c742-419d-b636-8df7df5ab368.jpg"
					alt="Header"
				/>
				<header>
					<meta name="ROBOTS" content="INDEX, FOLLOW" />
					<meta name="keywords" content="" />
					<meta name="description" content="" />
					<h3>Answer these five multiple-choice questions.</h3>
					<h4>
						It’ll only take a couple of minutes. And we’ll calculate your
						<br />
						productivity index, right here, right now.
					</h4>
				</header>
			</div>
		);
	}
}

export default Banner;
