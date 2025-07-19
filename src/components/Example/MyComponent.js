import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Tako",
        age: 22,
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };
    render = () => {
        return (
            <>
                <div className="first">Hello World with MyComponent! My name is {this.state.name}</div>
                <div className="second">
                    <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)} /> I
                    am {this.state.age} years old.
                </div>
            </>
        );
    };
}

export default MyComponent;
