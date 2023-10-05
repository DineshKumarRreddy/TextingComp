import { ACTION_TYPES } from "../../constants";
export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.INITILIZE:
        case ACTION_TYPES.UPDATE_MSG:
        case ACTION_TYPES.TOGGEL_AND_UPDATE:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export const initalState = { value: '', showDropDown: false, users: undefined, searchText: '' };