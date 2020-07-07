import React from 'react'
import CustomForm from '../CustomForm/CustomForm'
import './Items.scss';
import ItemListContainer from '../ItemList/ItemListContainer';
export default function Items(props) {
    const {onClickFormButton} = props;
    return (
        <div className="items">
            <h2 className="items__title">Items</h2>
            <CustomForm onClick={onClickFormButton} />
            <ItemListContainer />
        </div>
    )
}
