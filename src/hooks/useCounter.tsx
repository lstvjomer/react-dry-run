import { useState } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState<number>(0);
    const counterHandler = (operation: "add" | "minus", value: number) => {
        setCounter(prev => operation === "add" ? prev + value : prev - value);
    }

    return {
        counter,
        counterHandler
    }
}

export default useCounter