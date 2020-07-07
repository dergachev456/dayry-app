import React, { Component } from 'react'
import Comments from './Comments'
import { connect } from 'react-redux';
import { createComment } from '../../store/actions/itemsActionCreator';
import { showColorPicker } from '../../store/actions/mainActionCreator';
import {getRandonId} from '../../functions.js'

class CommentsContainer extends Component {
    state = {
        text: ""
    }

    onChangeText = e => {
        this.setState({
            text: e.target.value
        })
    }

    getSelectedItem = () => {
        const { items, main } = this.props;
        const selectedItemIndex = main.selectedItemIndex;
        const selectedItem = items.filter((item, index) => index === selectedItemIndex);
        return selectedItem[0];
    }

    createComment = () => {
        const { createComment, main, items } = this.props;
        const { text } = this.state;
        console.log(items.length);
        
        if (text !== "" && items.length !== 0) {
            const selectedItem = this.getSelectedItem();
            const id = getRandonId();
            createComment(selectedItem.id, id, text, main.selectedColor);
            this.setState({ text: "" })
        }
    }
    render() {
        const selectedItem = this.getSelectedItem();
        const { showColorPicker, main } = this.props;
        const { text } = this.state;
        return (
            <Comments
                selectedItem={selectedItem}
                onClick={this.createComment}
                showColorPicker={showColorPicker}
                text={text}
                onChangeText={this.onChangeText}
                color={main.selectedColor}
            />
        )
    }
}


export default connect((state) => ({
    items: state.items,
    main: state.main
}), { createComment, showColorPicker })(CommentsContainer);
