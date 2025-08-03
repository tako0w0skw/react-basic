import React from "react";
import Color from "../HOC/Color";
import photo from "../../assets/image/keke_cat.png";
import "./Home.scss";
import { connect } from "react-redux";

class Home extends React.Component {
	state = {};

	render() {
		{
			console.log(">>> check props: ", this.props);
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

const mapStateToProps = (state) => {
	return { dataRedux: state.users };
};

export default connect(mapStateToProps)(Color(Home));
