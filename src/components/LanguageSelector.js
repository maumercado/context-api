import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
    static contextType = LanguageContext;

    _onClick(language) {
        return () => this.context.onLanguageChange(language);
    }

    render() {
        return (
            <div>
                Select a Language
                <i className="flag us" onClick={this._onClick("english")} />
                <i className="flag co" onClick={this._onClick("spanish")} />
            </div>
        );
    }
}

export default LanguageSelector;
