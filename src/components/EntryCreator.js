import React, { useState } from "react";

const EntryCreator = ({ createNewEntry }) => {
    const [newPersonName, setNewPersonName] = useState("");

    // Submit event handler
    const handleSubmit = (e) => {
        e.preventDefault();
        createNewEntry(newPersonName);
        setNewPersonName("");
    };

    return (
        <form onSubmit={handleSubmit} className="my-2 row">
            <div className="col-8">
                <input
                    type="text"
                    placeholder="Enter a new person"
                    value={newPersonName}
                    onChange={(e) => setNewPersonName(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="col-4">
                <button className="btn btn-primary btn-sm">Enter Person</button>
            </div>
        </form>
    );
};

export default EntryCreator;
