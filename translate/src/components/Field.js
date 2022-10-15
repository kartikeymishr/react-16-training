import React, {Component} from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
    // This is a special prop name -> think of it like a literal
    // Has to be named contextType
    static contextType = LanguageContext

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam'

        return (
            <div className="ui field">
                <label>{text}</label>
                <input type="text"/>
            </div>
        );
    }
}

export default Field