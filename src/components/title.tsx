import { useReducer, useRef, useState } from "react";

interface ITitleProps {
    title: string;
    description?: string;
    onSmthngHappen: (title: string) => void;
}
interface ICountNode {
    age: number | string;
}

const Title: React.FC<ITitleProps> = ({ title, description = "Desc", onSmthngHappen }) => {

    // const [count, setCount] = useState(1453) // Type Inference
    // const [count, setCount] = useState<number | string | null | undefined>(1453) 

    // const [count, setCount] = useState<{ age: number }>({ age: 43 })
    const [count, setCount] = useState<ICountNode>({ age: 43 })

    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    onSmthngHappen(title);

    // const [nodes, dispatch] = useReducer([""],[])

    // const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   console.log(event)
    // }
    // const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    //     console.log(event.target.value);
    //   }
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.value)
    }
    const handleChangeDiv = (event: React.FormEvent<HTMLDivElement>) => {
        console.log(event)
    }

    return (
        <div ref={divRef}>
            {title}
            {description}
            <input type="text" onChange={(event) => handleChangeInput(event)} />
            <div onChange={(event) => handleChangeDiv(event)} />
            <input type="text" ref={inputRef} />
            <button ref={buttonRef}>click</button>
        </div>
    )
}

export default Title