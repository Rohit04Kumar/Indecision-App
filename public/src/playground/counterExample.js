



let count = 0 ;

const addOne = () => {
     count++;
     counterRenderApp()
}

const minusOne = () => {
    count--;
    counterRenderApp()
}

const reset = () => {
    count = 0;
    counterRenderApp()
}

const appRoot = document.getElementById('app');

const counterRenderApp = () => {
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> Reset </button>
        </div>
    )
    
    ReactDOM.render(templateTwo, appRoot);
}

counterRenderApp();