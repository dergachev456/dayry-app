import React from 'react'
import './CommentList.scss'

export default function CommentList(props) {
    const {selectedItem} = props;
    return (
        <>
            {
                selectedItem && selectedItem.comments && (
                    selectedItem.comments.map(comment => {
                        return (
                            <div key={comment.id} className="comment">
                                <div style={{ backgroundColor: comment.color }} className="comment__color" />
                                <span className="comment__text">{comment.name}</span>
                            </div>
                        )
                    })
                )
            }
        </>
    )
}
