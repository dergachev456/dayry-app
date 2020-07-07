import React from 'react'
import "./ItemList.scss"
export default function ItemList(props) {
    const { items, deleteItem, selectedItemIndex, setSelectedItemIndex } = props;
    return (
        <div className="item-list">
            {
                items && items.map((item, index) => {
                    return (
                        <div onClick={() => setSelectedItemIndex(index)} key={item.id} className={selectedItemIndex === index ? "item active" : "item"}>
                            <span className="item__name">{item.name}</span>
                            <div className="item__count-container">
                                <span className="item__count">{item.comments.length}</span>
                            </div>
                            <button onClick={() => deleteItem(item.id)} className="item__button">Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
