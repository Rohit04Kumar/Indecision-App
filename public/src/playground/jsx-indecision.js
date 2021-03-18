const app = {
    title : 'Indecision App',
    subTitle : ' Puts your Life In A Hands Of A Computer ',
    options : []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.options.value;
    

    if(option){
    app.options.push(option)
    e.target.elements.options.value='';
    renderApp();
    }

}

const removeAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            {app.subTitle && <p> {app.subTitle} </p>}
            <p>{(app.options.length) > 0 ?  'Here Is your options'  :  'No Options' }</p>
            <ol>
                {
                    app.options.map((option) => {
                    return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}> What Should I Do ? </button>
            <button onClick={removeAll}>Remove All</button>


            <form onSubmit = {onFormSubmit}>
                <input type="text" name="options" />
                <button>Add Options</button>
            </form>
        
        </div>
        );
        
        
        
        ReactDOM.render(template, appRoot);
}

renderApp();

