import { useState, createContext } from 'react';

//context api initialization and global state storage
const counterContext = createContext();

//CounterProvider function global states and functions declared and initialized.
export const CounterProvider = ({children})=> {
    const  [counter, setCounter] = useState(0);

    //Increase Counter
    const increment = () => {
        return setCounter(counter + 1);
    }

    //Decrease Counter
    const decrement = () => {
        return setCounter(counter - 1);
    }

    return (
        <counterContext.Provider value={{counter, increment, decrement}}>
            {children}
        </counterContext.Provider>
    )
}

export default counterContext;