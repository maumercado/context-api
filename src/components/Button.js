import React, { Component } from "react";
import { Button as Btn } from "semantic-ui-react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
    renderSubmit = language => {
        return language === "english" ? "Submit" : "Enviar";
    };

    renderButton(color) {
        return (
            <Btn color={`${color}`}>
                <LanguageContext.Consumer>{({ language }) => this.renderSubmit(language)}</LanguageContext.Consumer>
            </Btn>
        );
    }

    render() {
        return <ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>;
    }
}

export default Button;
