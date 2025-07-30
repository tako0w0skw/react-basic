import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
	state = {};
	componentDidMount() {
		setTimeout(() => {
			this.props.history.push("/todos");
		}, 3000);
	}
	render() {
		{
			console.log(this.props);
		}
		return <div>Hello World From Home Page With Tako</div>;
	}
}

export default withRouter(Home);
