import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firstName: "Nhu",
        lastName: "Chung Hue",
    };

    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };

    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    };

    handleOnClickSubmit = (event) => {
        event.preventDefault();
        console.log(">>> Check input data: ", this.state);
    };

    render() {
        console.log(">>> Props: ", this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleOnChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleOnChangeLastName(event)}
                    />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleOnClickSubmit(event)}
                    />
                </form>
                <ChildComponent name={"Hue Nhu"} age={"22"} />
            </>
        );
    }
}

export default MyComponent;
