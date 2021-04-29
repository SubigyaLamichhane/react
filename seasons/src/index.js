import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

//The App COmponent

class App extends React.Component{
    constructor(props){
        super(props);

        //This is the only time we do direct assignment to this.state
        this.state = {lat: null, errorMessage: null};

    }

    componentDidMount(){
        //Accessing the geo location
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message})
            
        );
    }
    

    render(){
        
            if(this.state.lat && !this.state.errorMessage){
                return <SeasonDisplay lat = {this.state.lat} />
            }
            if(!this.state.lat && this.state.errorMessage){
                return <div>Error: {this.state.errorMessage}</div>
            }
            return <div>Loading!</div>;
        
    }
}




//Rendering in to the screen

ReactDOM.render(<App />, document.querySelector('#root'));