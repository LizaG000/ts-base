import { useState } from "react";
function Task1() {
    const [array_request, setArrayRequest] = useState("12, 45, 56")
    const [number_request, setNumberRequest] = useState("12")
    const [array_response, setArrayResponse] = useState("")

    const func = (array: number[], num: number) => {
        let response = ""
        for (let i = 0; i <= array.length; i++) {
            if (array[i] % num == 0 && array[i] != 0) {
                if (response == "") {
                    response = String(array[i])
                }
                else {
                    response += ", " + String(array[i])
                }
            }
        }
        return response
    }

    const click = () => {
        const array_number: number[] = []
        let array_string: string[]
        let number_: number

        const pattern1 = /^(\d+\s)+\d+$|^(\d+\s)+\d+$|^\d+\s/;
        const pattern2 = /^(\d+,\s)+\d+$/;
        if (pattern1.test(array_request)) {
            array_string = array_request.split(" ");
        } else if (pattern2.test(array_request)) {
            array_string = array_request.split(", ");
        } else {
            setArrayResponse("Ожидается массив");
            return;
        }
        console.log(array_string)
        for (let i = 0; i < array_string.length; i++) {
            array_number.push(Number(array_string[i]))
            console.log(array_string[i])
            console.log(array_number)
        }

        const pattern3 = /^(\d+)$/;
        if (pattern3.test(number_request)) {
            number_ = Number(number_request);
        } else {
            setArrayResponse("Ожидается число");
            return;
        }
        setArrayResponse(func(array_number, number_))
    }

    return (
        <>
            <h1 className="center-h">Задание 1</h1>
            <div className="center-h margin-t-55">
                <div className="margin-r-55">
                    <p className="center-h">Введите массив</p>
                    <div className="center-h margin-t-25">
                        <input
                            type="text"
                            name="request"
                            value={array_request}
                            onChange={(e) => setArrayRequest(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>
                <div>
                    <p className="center-h">Введите делитель</p>
                    <div className="center-h margin-t-25">
                        <input
                            type="text"
                            name="request"
                            value={number_request}
                            onChange={(e) => setNumberRequest(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>
            </div>
            <div className="center-h margin-t-55">
                <button className="" onClick={click}>Ответ</button>
            </div>
            <div className="center-h margin-t-55">
                <div>
                    <p className="center-h">Ответ</p>
                    <div className="center-h margin-t-25">
                        <input
                            type="text"
                            name="request"
                            value={array_response}
                            readOnly
                        ></input>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task1