import React, { Component } from 'react'
import './CustomForm.scss'
import {getRandonId} from '../../functions.js'

export default class CustomForm extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    state = {
        text: ""
    }
    create = () => {
        const { onClick } = this.props;
        const { text } = this.state;
        if (text !== "") {
            const id = getRandonId();
            onClick(id, text);
            this.setState({ text: "" });
            this.myRef.current.focus();
        }
    }
    onChangeText = e => {
        this.setState({
            text: e.target.value
        })
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.create();
        }
    }
    render() {
        const { text } = this.state;
        return (
            <div className="custom-form">
                <input
                    ref={this.myRef}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.onChangeText}
                    value={text}
                    placeholder="Type name here..."
                    className="custom-form__input"
                    type="text"
                />
                <button onClick={this.create} className="custom-form__button">Add new</button>
            </div>
        )
    }
}





