import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container";
import EntryCreator from "./components/EntryCreator";
import EntryTable from "./components/EntryTable";
import ShowControlls from "./components/ShowControlls";

// CONTINUAR AQUÍ:
function App() {
    const [entriesList, setEntriesList] = useState([]);
    const [showOutputs, setShowOutputs] = useState(false);

    const getCurrentTime = () => {
        let date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    };

    // Create new entries
    const createNewEntry = (newPersonName) => {
        //Check if the entry doesn't exist
        if (!entriesList.find((entry) => entry.name === newPersonName)) {
            setEntriesList([
                ...entriesList,
                {
                    name: newPersonName,
                    alreadyEntered: false,
                    hour: getCurrentTime(),
                },
            ]);
        } else {
            alert("There is already an entry with the same name");
        }
    };

    // Change the status of already entered
    const toggleStatusAlreadyEntered = (entry) => {
        setEntriesList(
            entriesList.map((entryItem) =>
                entryItem.name === entry.name
                    ? {
                          ...entryItem,
                          alreadyEntered: !entryItem.alreadyEntered,
                      }
                    : entryItem
            )
        );
    };

    // Effect to get entries list from localstorage
    useEffect(() => {
        let data = localStorage.getItem("entries");
        if (data) {
            setEntriesList(JSON.parse(data));
        }
    }, []);

    //Clean all outputs
    const cleanEntries = () => {
        setEntriesList(entriesList.filter((entry) => !entry.alreadyEntered));
        setShowOutputs(false);
    };

    // Effect to monitor changes in 'entriesList' and add to localstorage
    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entriesList));
    }, [entriesList]);

    return (
        <main className="bg-dark min-vh-100 text-white">
            <Container>
                <h1 clas>Control of people entered</h1>
                <EntryCreator createNewEntry={createNewEntry} />
                <EntryTable
                    entries={entriesList}
                    toggleStatusAlreadyEntered={toggleStatusAlreadyEntered}
                />
                <ShowControlls
                    isChecked={showOutputs}
                    setShowOutputs={(checked) => setShowOutputs(checked)}
                    cleanEntries={cleanEntries}
                />
                {showOutputs && (
                    <EntryTable
                        entries={entriesList}
                        toggleStatusAlreadyEntered={toggleStatusAlreadyEntered}
                        showOutputs={showOutputs}
                    />
                )}
            </Container>
        </main>
    );
}

export default App;
