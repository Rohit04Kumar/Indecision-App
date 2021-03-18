import React from 'react';
import Header from './Header'
import Action from './Action'
import AddOptions from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options : [],
        selectedOption : undefined
    }


    // handleDeleteAll(){
    //     this.setState(() => {
    //         return{
    //             options : []
    //         }
    //     })
    // }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

        if(options){
            this.setState(() =>({ options : options }))
        }

        }catch(e){
            // Nothing to Do
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        } 
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount');
    }

    handleClearSelectedOption = () => {
        this.setState(() =>({ selectedOption : undefined }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ options : prevState.options.filter((option) => optionToRemove !== option) }))
    }

    handleDeleteAll = () => {
        this.setState(() => ({options : [] }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption : option
        }))
    }

    handleAddOption = (option) => {

        if(!option){
            return 'Please Enter A Valid Item'
        }else if(this.state.options.indexOf(option) > -1 ){
            return 'this Option Alread Exist'
        }

        // this.setState((prevState) =>{
        //     return {
        //         options : prevState.options.concat(option)
        //     }
        // })

        this.setState((prevState) => ({ options : prevState.options.concat(option) }))
    }

    render(){
        const title = 'Indecision App';
        const subTitle = 'Puts Your Life In The Hands of Computer';
        return(
            <div>
                <Header subTitle={subTitle}/>
            <div className="container">
                <Action 
                    hasOption = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteAll = {this.handleDeleteAll}
                            handleDeleteOption = {this.handleDeleteOption}
                        /> 
                        <AddOptions 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        </div>
        )
    }
}