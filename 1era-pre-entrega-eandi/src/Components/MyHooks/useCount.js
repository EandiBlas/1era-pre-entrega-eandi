//usecount: es un contador que nos permite contar productiños.

import { useState } from "react";

export const useCount = (ValueInitial, ValueMax) => {

    const [count, setCount] = useState(ValueInitial);

    const increase = () => {
        if (count < ValueMax) {
            setCount(count + 1);
        }
    }

    const decrease = () => {
        if (count > ValueInitial) {
            setCount(count - 1);
        }
    }

    return { count, increase, decrease}
}