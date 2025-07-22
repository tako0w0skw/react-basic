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

const ChildComponent = (props) => {
    let { arrJobs } = props;
    console.log(">>> Props: ", props);

    return (
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
        </>
    );
};

export default ChildComponent;
