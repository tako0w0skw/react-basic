import React from "react";
import Color from "../HOC/Color";
import photo from "../../assets/image/keke_cat.png";
import "./Home.scss";
import { connect } from "react-redux";

class Home extends React.Component {
	handleDeleteUser = (user) => {
		console.log("Delete user: ", user);
		this.props.deleteUserRedux(user);
	};

	handleAddUser = () => {
		this.props.addUserRedux();
	};

	render() {
		{
			console.log(">>> check props: ", this.props);
		}

		let listUsers = this.props.dataRedux;

		return (
			<>
				<div>Hello World From Home Page With Tako</div>
				<div className='image'>
					<img src={photo} />
				</div>
				<div>
					{listUsers &&
						listUsers.length > 0 &&
						listUsers.map((item, index) => {
							return (
								<div key={item.id}>
									{index + 1} - {item.name}{" "}
									<span onClick={() => this.handleDeleteUser(item)}>x</span>
								</div>
							);
						})}
					<button onClick={() => this.handleAddUser()}>Add new user</button>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteUserRedux: (userDelete) => dispatch({ type: "DELETE_USER", payload: userDelete }),
		addUserRedux: () => dispatch({ type: "ADD_USER" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
