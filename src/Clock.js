import React, { Component } from "react";

class ClockIn extends Component{

    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        };
    }

    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState(
            {data : new Date()}
        )
    }

    render(){
        console.log("in!!!");
        return(
            <div>
                <h6>현재 시각은</h6>
                <div>{ this.state.date.toLocaleDateString() }</div>
            </div>
        );
    }
}

export {ClockIn}