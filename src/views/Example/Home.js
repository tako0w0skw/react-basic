import React from "react";
import Color from "../HOC/Color";
import photo from "../../assets/image/keke_cat.png";
import "./Home.scss";

class Home extends React.Component {
	state = {};

	render() {
		{
			console.log(this.props);
		}
		return (
			<>
				<div>Hello World From Home Page With Tako</div>
				<div className='image'>
					<img src={photo} />
				</div>
			</>
		);
	}
}

export default Color(Home);
