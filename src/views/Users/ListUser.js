import React from "react";
import axios from "axios";
import "./ListUser.scss";

class ListUser extends React.Component {
	state = {
		listUser: [],
	};

	async componentDidMount() {
		let res = await axios.get("https://jsonplaceholder.typicode.com/users");
		let data = res && res.data ? res.data : [];
		this.setState({
			listUser: data,
		});
	}
	render() {
		let { listUser } = this.state;
		return (
			<div className='list-user-container'>
				<div className='title'>Fetch All List Users</div>
				<div className='list-user-content'>
					{listUser &&
						listUser.length > 0 &&
						listUser.map((item, index) => {
							return (
								<div className='child' key={item.id}>
									{index + 1} - {item.name}
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

export default ListUser;
