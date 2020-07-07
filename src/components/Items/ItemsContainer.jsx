import React, { Component } from 'react'
import Items from './Items'
import { connect } from 'react-redux';
import { createItem } from '../../store/actions/itemsActionCreator';
class ItemsContainer extends Component {
    render() {
        const {createItem} = this.props;

        return (
            <>
                <Items onClickFormButton={createItem} />
            </>
        )
    }
}
export default connect(() => ({}), {
    createItem
})(ItemsContainer);