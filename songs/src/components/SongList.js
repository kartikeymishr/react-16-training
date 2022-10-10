import React, {Component} from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongList extends Component {
    renderList = () => {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >Select</button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

// Name by convention ~ Can be called whatever
// Mapping Redux State objects to local component's props
// Key is name of the prop by which it can be accessed in the component
const mapStateToProps = (state) => {
    return {songs: state.songs}
}

// Connect method's first argument takes method to map Redux State objects
// Second argument takes actions
export default connect(mapStateToProps, {selectSong})(SongList)

