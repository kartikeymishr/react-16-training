import React from "react";

class SearchBar extends React.Component {
    state = {term: 'Please enter a search term'}

    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onClick={() => this.setState({term: ''})}
                            onChange={(e) => this.setState({term: e.target.value})}
                            onBlur={() => this.setState({term: 'Please enter a search term'})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar