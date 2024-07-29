import React, { Component } from 'react'

class Class1 extends Component {

    constructor(props){
        super(props);
        this.state={
            message : "Hello World"
        };
    }

    componentDidMount(){
        console.log("class will load")
    }

    componentWillUnmount(){
        console.log("class is loading")
    }

    change = () => {
        this.setState({message : this.props.message});
    }
    
    render() {
        return (
            <>
                <p>{this.state.message}</p>
                <button onClick={this.change}>Change</button>   
            </>
        )
    }
}

export default Class1