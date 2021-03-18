class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        }
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

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({ options : prevState.options.filter((option) => optionToRemove !== option) }))
    }

    handleDeleteAll(){
        this.setState(() => ({options : [] }))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){

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
                <Action 
                    hasOption = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteAll = {this.handleDeleteAll}
                    handleDeleteOption = {this.handleDeleteOption}
                /> 
                <AddOptions 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <p>{props.subTitle}</p>}
        </div>
        )
}

Header.defaultProps = {
    title : 'Indecision'
};

// class Header extends React.Component {
//     render(){ 
//         return(
//         <div>
//             <h1>{this.props.title}</h1>
//             <p>{this.props.subTitle}</p>
//         </div>
//         )
//     }
// }

const Action = (props) => {
    return(
        <div>
            <button disabled = {!props.hasOption} onClick={props.handlePick}>
                What Should I Do ?
            </button>
        </div>
    )
}

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

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteAll}>
                Remove All
            </button>
                {props.options.length === 0 && <p>Please Eneter Options To Get Started! </p>}
                {props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption = {props.handleDeleteOption}
                    />
                ))}
        </div>
    ) 
}

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

const Option = (props) => {
    return(
        <div>
            { props.optionText}
            <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
            >
                Remove 
            </button>
        </div>
    )
}

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 {
//                     this.props.optionText
//                 }
//             </div>
//         )
//     }
// }

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleAddOption(e){
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='options'/>
                    <button>Add Options</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));