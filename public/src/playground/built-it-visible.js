class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.showDetails = this.showDetails.bind(this);
        this.state = {
            visibility : false
        }
    }
    showDetails(){
        this.setState((prevState) => {
            return{
                visibility : !prevState.visibility
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.showDetails}>
                    {
                        this.state.visibility ? 'Hide Details' : 'Show Details'
                    }
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>Here Is The result</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));



// let visibility = false ;

// const showDetails = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const toggle = (
//         <div>
//             <h1> Visibility Toggle </h1>
//             <button onClick={showDetails}>
//                 {visibility ? 'Hide Details ' : 'Show Details'}
//             </button>
//             {
//                 visibility && (
//                     <div>
//                         <p> Here Are The Details !</p>
//                     </div>
//                 )
//             }
//         </div>
//     )
    
//     ReactDOM.render(toggle, document.getElementById('app'))
// }

// render();