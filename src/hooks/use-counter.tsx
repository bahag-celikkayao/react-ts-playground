import { useState, useEffect } from "react";

const useCounter = (forwards:boolean=true, value:number=0) => {
    const [counter, setCounter] = useState(value)

    useEffect(()=>{
        setCounter(value);
        const interval = setInterval(()=>{
            if(forwards){
                setCounter((prevCounter) => prevCounter != 0 ? prevCounter + 1 : prevCounter = 0);
            } else {
                setCounter((prevCounter) => prevCounter != 0 ? prevCounter - 1 : prevCounter = 0);
            }
        },1000);
        return () => clearInterval(interval);
    },[value])

    return counter;
}

export default useCounter;