import React from 'react'
import './Items.scss';
import ItemListContainer from '../ItemList/ItemListContainer';
import { CustomButton } from '../CustomButton/CustomButton';
import  {CustomInput}  from '../CustomInput/CustomInput';

export default function Items(props) {
    const { onClickFormButton, inputValue, onChangeInput } = props;
    return (
        <div className="items">
            <h2 className="items__title">Items</h2>
            <div className="items__form">
                <CustomInput
                    value={inputValue}
                    placeholder="Type name here..."
                    className="items__input"
                    onChange={onChangeInput}
                    onKeyPress={onClickFormButton}
                />
                <CustomButton
                    onClick={onClickFormButton}
                    className="items__button"
                >
                    Add new
                </CustomButton>
            </div>
            <ItemListContainer />
        </div>
    )
}
