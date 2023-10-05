import { useReducer, useCallback, useEffect, useState } from "react";
import { InputText } from "../InputText";
import { AutoCompleteDropDown } from "../AutoCompleteDropDown";
import { ACTION_TYPES, CONSTANTS } from "../../constants";
import { initalState, reducer } from "./context";

export const TextBox = ({ data }) => {
    const [state, dispatch] = useReducer(reducer, initalState);
    useEffect(() => {
        dispatch({ type: ACTION_TYPES.INITILIZE, payload: { users: data?.slice(0, 10) } });
    }, []);

    const filterUsers = (data, searchText) => {
        return data?.filter(({ first_name, last_name }) => {
            return `${first_name} ${last_name}`.toLowerCase().slice(0, searchText.length)
                === searchText.toLowerCase();
        })?.slice(0, 10);
    };

    const onChange = useCallback((eve) => {
        let showDropDown = state.showDropDown,
            value = eve.target.value,
            // value = eve.currentTarget.value,
            users = state.users;
        if (eve.nativeEvent.data === "@" && !showDropDown) {
            showDropDown = !showDropDown;
        } else if (showDropDown &&
            (eve.nativeEvent.data === " " ||
                eve.nativeEvent.data === "," ||
                eve.nativeEvent.data === '.')) {
            showDropDown = !showDropDown;
            value = `${value}${eve.nativeEvent.data}`;
        } else if (showDropDown) {
            users = filterUsers(data, value.slice(1, value.length));
        }
        dispatch({
            type: ACTION_TYPES.UPDATE_MSG,
            payload: { value, showDropDown, users }
        });
    }, [state.value, state.users]);

    const onClick = useCallback((name) => {
        let showDropDown = !state.showDropDown, value = `@${name} `;
        dispatch({
            type: ACTION_TYPES.TOGGEL_AND_UPDATE,
            payload: { value, showDropDown }
        });
    }, [state.showDropDown, state.value]);

    return <>
        <InputText
            type={CONSTANTS.type}
            value={state.value}
            onChange={onChange}
            placeholder={CONSTANTS.placeholder}
        />
        <AutoCompleteDropDown
            showDropDown={state.showDropDown}
            onClick={onClick}
            users={state.users}
        />
    </>;
};