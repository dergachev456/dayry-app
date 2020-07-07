import { SET_SELECTED_ITEM, SET_SELECTED_COLOR, SHOW_COLOR_PICKER, HIDE_COLOR_PICKER } from '../constants';

const initialState = {
    selectedItemIndex: 0,
    selectedColor: "#000",
    isColorPicker: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItemIndex: action.payload
            }
        case SET_SELECTED_COLOR:
            return {
                ...state,
                selectedColor: action.payload
            }
        case SHOW_COLOR_PICKER:
            return {
                ...state,
                isColorPicker: true
            }
        case HIDE_COLOR_PICKER:
            return {
                ...state,
                isColorPicker: false
            }
        default:
            return state;
    }
}