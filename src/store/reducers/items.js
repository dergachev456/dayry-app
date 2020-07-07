import {
    CREATE_ITEM,
    DELETE_ITEM,
    CREATE_COMMENT,

} from '../constants';
import {
    load
} from 'redux-localstorage-simple';

let ITEMS = load({
    namespace: 'todo'
});

if (!ITEMS || !ITEMS.items || !ITEMS.items.length) {
    ITEMS = {
        items: [],
    }
}

const items = (state = ITEMS.items, {
    id,
    name,
    type,
    color,
    item_id

}) => {
    switch (type) {
        case CREATE_ITEM:
            return [
                ...state, {
                    id,
                    name,
                    comments: [],
                }
            ];
        case DELETE_ITEM:
            return [...state].filter((item) =>
                item.id !== id
            );

        case CREATE_COMMENT:
            const newComment = {
                id,
                name,
                color
            }
            return [...state].map(item => {
                if (item.id === item_id) {
                    item.comments = [newComment, ...item.comments];
                }
                return item;
            })
        default:
            return state;
    }
}

export default items;