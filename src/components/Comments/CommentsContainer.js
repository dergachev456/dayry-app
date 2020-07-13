import React, { Component } from 'react'
import Comments from './Comments'
import { connect } from 'react-redux';
import { createComment } from '../../store/actions/itemsActionCreator';
import { showColorPicker, handleCommentText } from '../../store/actions/mainActionCreator';
import {getRandonId} from '../../functions.js'

class CommentsContainer extends Component {

    onChangeText = e => {
        const {handleCommentText} = this.props;
        handleCommentText(e.target.value);
    }

    getSelectedItem = () => {
        const { items, main } = this.props;
        const selectedItemIndex = main.selectedItemIndex;
        const selectedItem = items.filter((item, index) => index === selectedItemIndex);
        return selectedItem[0];
    }

    createComment = () => {
        const { createComment, main : {commentText, selectedColor}, items, handleCommentText } = this.props;
        
        if (commentText !== "" && items.length !== 0) {
            const selectedItem = this.getSelectedItem();
            const id = getRandonId();
            createComment(selectedItem.id, id, commentText, selectedColor);
            handleCommentText("");
        }
    }
    render() {
        const selectedItem = this.getSelectedItem();
        const { showColorPicker, main } = this.props;
        return (
            <Comments
                selectedItem={selectedItem}
                onClick={this.createComment}
                showColorPicker={showColorPicker}
                onChangeText={this.onChangeText}
                color={main.selectedColor}
                inputValue={main.commentText}
            />
        )
    }
}


export default connect((state) => ({
    items: state.items,
    main: state.main
}), { createComment, showColorPicker, handleCommentText })(CommentsContainer);
