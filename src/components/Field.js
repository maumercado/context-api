import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context.language === "english" ? "Name" : "Nombre";
        return (
            <Form.Field>
                <label>{text}</label>
                <input />
            </Form.Field>
        );
    }
}

export default Field;
