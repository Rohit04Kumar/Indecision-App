import React from 'react';

const Action = (props) => (
    <div>
        <button 
            className = "big-button"
            disabled = {!props.hasOption} 
            onClick={props.handlePick}>
            What Should I Do ?
        </button>
    </div>
)

export default Action;

// class Action extends React.Component{
//     render(){
//         return(
//             <div>
//                 <button disabled = {!this.props.hasOption} onClick={this.props.handlePick}>
//                     What Should I Do ?
//                 </button>
//             </div>
//         )
//     }
// }