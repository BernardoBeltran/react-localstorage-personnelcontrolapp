import React from "react";

const ShowControlls = ({ setShowOutputs, cleanEntries, isChecked }) => {
    const handleDelete = () => {
        if (
            window.confirm(
                "Are you sure to delete the history of people who left?"
            )
        ) {
            cleanEntries();
        }
    };
    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <label>See people who left</label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setShowOutputs(e.target.checked)}
                    className="form-check-input"
                />
            </div>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">
                Clear
            </button>
        </div>
    );
};

export default ShowControlls;
