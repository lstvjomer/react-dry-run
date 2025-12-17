import useCounter from "../hooks/useCounter";
import { Button } from "./ui/button";

const Counter = () => {
    const { counter, counterHandler } = useCounter();

    return (
        <div>
            <div>Counter: {counter}</div>
            <div className="flex gap-3 mx-auto">
                <Button
                    variant="outline"
                    onClick={() => counterHandler("add", 2)}
                >
                    Add
                </Button>
                <Button onClick={() => counterHandler("minus", 6)}>
                    Minus
                </Button>
            </div>
        </div>
    );
};

export default Counter;
