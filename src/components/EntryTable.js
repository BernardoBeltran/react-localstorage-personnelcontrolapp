import React from "react";
import EntryRow from "./EntryRow";

const EntryTable = ({
    entries,
    toggleStatusAlreadyEntered,
    showOutputs = false,
}) => {
    const entryTableRows = (readyValue) => {
        console.log(readyValue);
        if (entries.length === 0) {
            return (
                <tr>
                    <td colSpan={2}>No data</td>
                </tr>
            );
        } else {
            return entries
                .filter((entry) => entry.alreadyEntered === readyValue)
                .map((entry) => (
                    <EntryRow
                        entry={entry}
                        key={entry.name}
                        toggleStatusAlreadyEntered={toggleStatusAlreadyEntered}
                    />
                ));
        }
    };

    return (
        <table className="table table-dark table-striped table-bordered border-secondary">
            <thead>
                <tr className="table-primary">
                    <th>Name</th>
                    <th>Entry time</th>
                </tr>
            </thead>
            <tbody>{entryTableRows(showOutputs)}</tbody>
        </table>
    );
};

export default EntryTable;
