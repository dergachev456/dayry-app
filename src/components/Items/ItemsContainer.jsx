import React, { Component } from 'react'
import Items from './Items'
import { connect } from 'react-redux';
import { createItem } from '../../store/actions/itemsActionCreator';
import { handleItemText } from '../../store/actions/mainActionCreator';
import { getRandonId } from '../../functions'

class ItemsContainer extends Component {

    create = () => {
        const { createItem, handleItemText, main: { itemText } } = this.props;
        if (itemText !== "") {
            const id = getRandonId();
            createItem(id, itemText);
            handleItemText('');
        }
    }

    onChangeItemText = (e) => {
        this.props.handleItemText(e.target.value);
    }

    render() {
        const { itemText } = this.props.main;
        return (
            <>
                <Items
                    onClickFormButton={this.create}
                    onChangeInput={this.onChangeItemText}
                    inputValue={itemText}
                />
            </>
        )
    }
}
export default connect((state) => ({
    main: state.main
}), {
    createItem, handleItemText
})(ItemsContainer);