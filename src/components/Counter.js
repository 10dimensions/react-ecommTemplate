import React, {Component} from 'react';

class Counter extends Component{
    render(){
        return (
                <div className="counter">
                    <button className="counter-button" onClick={this.props.decrementFn}> - </button>
                    <div className="counter-text">{this.props.count}</div>
                    <button className="counter-button" onClick={this.props.incrementFn}> + </button>
                </div>
        )
    }
}

export default Counter;