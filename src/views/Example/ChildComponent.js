import React from "react";

// class ChildComponent extends React.Component {
//     render() {
//         console.log(">>> Props: ", this.props);

//         let { arrJobs } = this.props;
//         return (
//             <>
//                 <div className="job-lists">
//                     {arrJobs.map((item) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </>
//         );
//     }
// }

class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    };

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        });
    };
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let checkShowJobs = showJobs ? "showJobs == true" : "showJobs == false";
        {
            console.log(">>> check showJobs: ", checkShowJobs);
        }

        return (
            <>
                {!showJobs ? (
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                ) : (
                    <>
                        <div className="job-lists">
                            {arrJobs.map((item) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default ChildComponent;
