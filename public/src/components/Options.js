import React from 'react';
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title"> Your Options </h3>
            <button 
            className="button button--link"
            onClick={props.handleDeleteAll}
            >
                Remove All
            </button>
        </div>
        
            {props.options.length === 0 && <p className="widget-message">Please Eneter Options To Get Started! </p>}
            {props.options.map((option, index) => (
                <Option 
                count={index + 1}
                key={option} 
                optionText={option} 
                handleDeleteOption = {props.handleDeleteOption}
                />
            ))}
    </div>
) 

export default Options;

// class Options extends React.Component{
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteAll}>
//                     Remove All
//                 </button>
//                     {this.props.options.map((option) => <Option key={option} optionText={option} />)}
//             </div>
//         )
//     }
// }