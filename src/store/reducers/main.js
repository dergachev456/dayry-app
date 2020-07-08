import { SET_SELECTED_ITEM, SET_SELECTED_COLOR, SHOW_COLOR_PICKER, HIDE_COLOR_PICKER, HANDLE_ITEM_TEXT, HANDLE_COMMENT_TEXT } from '../constants';

const initialState = {
    selectedItemIndex: 0,
    selectedColor: "#000",
    isColorPicker: false,
    itemText: '',
    commentText: ''
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
        case HANDLE_ITEM_TEXT:
            return {
                ...state,
                itemText: action.payload
            }
        case HANDLE_COMMENT_TEXT:
            return {
            ...state,
                commentText: action.payload
            }
        default:
            return state;
    }
}