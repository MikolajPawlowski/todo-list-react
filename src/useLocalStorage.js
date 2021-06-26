import { useState, useEffect } from "react";

export const useLocalStorage = (keyName, initialValue) => {
    const getInitialState = () => {
        const localStorageTasks = localStorage.getItem(keyName);
        if (localStorageTasks === null) {
            return initialValue;
        }

        return JSON.parse(localStorage.getItem(keyName))
    }


    const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [state, setState]);

    return [state, setState];

};