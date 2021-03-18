import React from 'react';

export default class AddOptions extends React.Component{
    state = {
        error : undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.options.value.trim();
        const error = this.props.handleAddOption(option); 

        this.setState(() => {
            return{
                error : error
            }
        })

        if(!error){
            e.target.elements.options.value = '';
        }

    }
    render(){
        return(
            <div>
                {this.state.error && <p className = "add-option__error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type='text' name='options'/>
                    <button className="button">Add Options</button>
                </form>
            </div>
        )
    }
}