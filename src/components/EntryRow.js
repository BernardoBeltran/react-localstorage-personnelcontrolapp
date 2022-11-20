import React from "react";

const EntryRow = ({ entry, toggleStatusAlreadyEntered }) => {
    return (
        <tr>
            <td>{entry.name}</td>
            <td className="d-flex justify-content-between">
                {entry.hour}
                <input
                    type="checkbox"
                    checked={entry.alreadyEntered}
                    onChange={() => toggleStatusAlreadyEntered(entry)}
                />
            </td>
        </tr>
    );
};

export default EntryRow;
