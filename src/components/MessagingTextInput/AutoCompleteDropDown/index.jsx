import React from "react";
import "./AutoCompleteDropDown.css"
export const AutoCompleteDropDown = React.memo(({ showDropDown, users, onClick }) => {
    const update = (first_name, last_name) => {
        onClick(`${first_name} ${last_name}`);
    };
    return <>
        {
            showDropDown && users?.length &&
            <section aria-label="auto-drop-down">
                {
                    <ul role="list">
                        {
                            users?.map(({ id, first_name, last_name }) =>
                                <li
                                    key={id}
                                    role="list-item"
                                    onClick={() =>
                                        update(first_name, last_name)}
                                >
                                    {`${first_name} ${last_name}`}
                                </li>
                            )}
                    </ul>
                }
            </section>
        }
    </>;
});