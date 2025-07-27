import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: "Web Developer",
        salary: "500000",
    };

    handleOnChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value,
        });
    };

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };

    handleOnClickSubmit = (event) => {
        event.preventDefault();
        console.log(">>> Check input data: ", this.state);
    };
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's title:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.titleJob}
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
