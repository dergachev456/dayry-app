import {
    SET_SELECTED_ITEM, SET_SELECTED_COLOR, SHOW_COLOR_PICKER, 
    HIDE_COLOR_PICKER, HANDLE_ITEM_TEXT, HANDLE_COMMENT_TEXT
} from '../constants';

export const setSelectedItemIndex = (index) => ({
    type: SET_SELECTED_ITEM,
    payload: index,
}); 

export const setSelectedColor = (color) => ({
    type: SET_SELECTED_COLOR,
    payload: color
});

export const showColorPicker = () => ({
    type: SHOW_COLOR_PICKER
});

export const hideColorPicker = () => ({
    type: HIDE_COLOR_PICKER
});

export const handleItemText = (value) => ({
    type: HANDLE_ITEM_TEXT,
    payload: value 
});

export const handleCommentText = (value) => ({
    type: HANDLE_COMMENT_TEXT,
    payload: value 
});


