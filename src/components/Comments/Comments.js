import React from 'react'
import "./Comments.scss"
export default function Comments(props) {
    const { selectedItem, onClick, showColorPicker, text, onChangeText, color } = props;
    return (
        <div className="comments">
            <span className="comments__title">Comments #</span>
            {
                selectedItem !== undefined && <span className="comments__title">{selectedItem.id}</span>
            }
            {
                selectedItem && selectedItem.comments && (
                    selectedItem.comments.map(comment => {
                        return (
                            <div key={comment.id} className="comment">
                                <div style={{backgroundColor: comment.color}} className="comment__color" />
                                <span className="comment__text">{comment.name}</span>
                            </div>
                        )
                    })
                )
            }
            <div className="comments__form-wrapper">
                <div onClick={showColorPicker} className="comments__square-container">
                    <div style={{ backgroundColor: color }} className="comments__square" />
                </div>
                <textarea
                    value={text}
                    placeholder="Type comment here..."
                    className="comments__textarea"
                    name="comments"
                    onChange={onChangeText}
                />
                <button onClick={onClick} className="comments__button">Add new</button>
            </div>
        </div>
    )
}
