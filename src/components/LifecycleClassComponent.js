import { Component } from "react"

export class LifecycleClassComponent extends Component {
    constructor(props){
        super(props)
        
        //this is initial state of the component
        this.state = {
            counter : 0,
            incrementor: props.incrementor
        }
    }

    increment = () => {
        this.setState((state) => ({counter: (state.counter + state.incrementor)}))
    }

    render(){
        console.log('LifecycleClassComponent -> render')
        return (<>
            <h2>Class Component</h2>
            <p>Counter value : {this.state.counter}</p>
            <button
                onClick={this.increment}
            >Increment</button>
        </>)
    }
}