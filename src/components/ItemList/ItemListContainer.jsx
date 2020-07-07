import React, { Component } from 'react'
import ItemList from './ItemList'
import { connect } from 'react-redux';
import { deleteItem } from '../../store/actions/itemsActionCreator';
import { setSelectedItemIndex } from '../../store/actions/mainActionCreator';


class ItemListContainer extends Component {

    componentDidUpdate() {
        const { items, main, setSelectedItemIndex } = this.props;
        const selectedItem = items.filter((item, index) => main.selectedItemIndex === index);
        if (selectedItem.length === 0 && items.length !== 0) {
            setSelectedItemIndex(items.length - 1);
        }
    }
    deleteItem = (id) => {
        const { deleteItem } = this.props;
        deleteItem(id);
        
    }

    render() {
        const { items, main, setSelectedItemIndex } = this.props;
        return (
            <ItemList
                items={items}
                deleteItem={this.deleteItem}
                selectedItemIndex={main.selectedItemIndex}
                setSelectedItemIndex={setSelectedItemIndex}
            />
        )
    }
}
export default connect((state) => ({
    items: state.items,
    main: state.main
}), {
    deleteItem, setSelectedItemIndex
})(ItemListContainer);