import {  useState } from "react";
function Task4(){
    const [el1, setEl1] = useState("1")
    const [el2, setEl2] = useState("2")
    const [sign, setSign] = useState("+")
    const [response, setResponse] = useState("3")

    const sum = (a: number, b: number) => {
        return a + b
    }

    const subtraction = (a: number, b: number) => {
        return a - b
    }

    const main_func = (func: (a: number, b:number) => number, a: number, b:number) => {
        return () => {
            console.log("Начало вызова функции!")
            return func(a, b)
        }
    }


    const click = () => {
        const pattern_1 = /^\d+$/
        let num_1 = 0
        let num_2 = 0
        let func: (a: number, b:number) => number
        if (pattern_1.test(el1) && pattern_1.test(el2)){
            num_1 = Number(el1)
            num_2 = Number(el2)
        }
        else if(!pattern_1.test(el1)){
            setEl1("Ожидается число!")
            return
        }
        else {
            setEl2("Ожидается число!")
            return
        }

        if (sign == "+"){
            func = sum
        }
        else if (sign == "-"){
            func = subtraction
        }
        else {
            setSign("Ожидается знак \"+\" или \"-\"")
            return
        }
        const new_func = main_func(func, num_1, num_2)
        setResponse(String(new_func()))

    }

    return(
        <>
        <input
        type="text"
        name="el1"
        value={el1}
        onChange={(e) => setEl1(e.target.value)}
        required
        ></input>
        <input
        type="text"
        name="sign"
        value={sign}
        onChange={(e) => setSign(e.target.value)}
        required
        ></input>
        <input
        type="text"
        name="el2"
        value={el2}
        onChange={(e) => setEl2(e.target.value)}
        required
        ></input>
        <button className="" onClick={click}>Ответ</button>
        <input
        type="text"
        name="response"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        required
        ></input>
        </>
    )
}

export default Task4
