import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "Web Developer",
        salary: "500000",
    };

    handleOnChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };

    handleOnClickSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert("Missing required params.");
            return;
        }
        console.log(">>> Check input data: ", this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        });

        this.setState({
            title: "",
            salary: "",
        });
    };
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's title:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleOnChangeTitleJob(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleOnChangeSalary(event)}
                    />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleOnClickSubmit(event)}
                    />
                </form>
            </>
        );
    }
}

export default AddComponent;
