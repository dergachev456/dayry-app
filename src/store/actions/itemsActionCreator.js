import {
    CREATE_ITEM, DELETE_ITEM, CREATE_COMMENT
} from '../constants';

export const createItem = (id, name) => ({
    type: CREATE_ITEM,
    id,
    name,
}); 

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    id,
});


export const createComment = (item_id, id, name, color) => ({
    type: CREATE_COMMENT,
    item_id,
    id,
    name,
    color
});