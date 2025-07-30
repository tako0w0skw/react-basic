import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
	state = {
		user: {},
	};

	async componentDidMount() {
		let id = this.props.match && this.props.match.params && this.props.match.params.id;
		let res = await axios.get(`https://reqres.in/api/users/${id}`, {
			headers: {
				"x-api-key": "reqres-free-v1",
			},
		});
		this.setState({
			user: res.data.data,
		});
	}

	handleBackButton = () => {
		this.props.history.push("/user");
	};

	render() {
		let { user } = this.state;
		let isEmptyObject = Object.keys(user).length === 0;

		return (
			<>
				<div>
					<img src={user.avatar} />
				</div>
				<div>User's id: {this.props.match.params.id}</div>
				{!isEmptyObject && (
					<>
						<div>
							User's name: {user.first_name} {user.last_name}
						</div>
						<div>User's email: {user.email}</div>
					</>
				)}
				<div>
					<button type='button' onClick={() => this.handleBackButton()}>
						Back
					</button>
				</div>
			</>
		);
	}
}

export default withRouter(DetailUser);
