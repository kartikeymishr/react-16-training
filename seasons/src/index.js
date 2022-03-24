import React from 'react';
import './SeasonDisplay.css'
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    state = {
        lat: null,
        long: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                })
            },
            (error) => this.setState({errorMessage: error.message})
        )
    }

    componentDidUpdate() {
        // Technically calls render() method here first
        console.log("My component was updated - it re-rendered");
    }

    renderContent = () => {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
        }

        return <Spinner message="Please accept location request"/>
    }

    // React says we have to define render()
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))