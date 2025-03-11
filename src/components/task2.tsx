import { useState } from "react";
function Task2() {
    const [array_request, setArrayRequest] = useState("Hello, world")
    const [string_request, setStringRequest] = useState("")
    const [array_response, setArrayResponse] = useState("")

    const func = (array: string[], separator: string) => {
        let response = ""
        for (let i = 0; i < array.length; i++) {
            if (response == "") {
                response = String(array[i])
            }
            else {
                response += separator + String(array[i])
            }
        }
        return response
    }

    const click = () => {
        let array_string: string[]

        const pattern1 = /^(.+,\s)+.+$|^.+/;
        if (pattern1.test(array_request)) {
            array_string = array_request.split(", ");
        } else {
            setArrayResponse("Ожидается массив");
            return;
        }


        setArrayResponse(func(array_string, string_request))
    }

    return (
        <>
            <h1 className="center-h">Задание 2</h1>
            <div className="center-h margin-t-55">
                <div className="margin-r-55">
                    <p>Введите массив</p>
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
                    <p>Введите разделитель</p>
                    <div className="center-h margin-t-25">
                        <input
                            type="text"
                            name="request"
                            value={string_request}
                            onChange={(e) => setStringRequest(e.target.value)}
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

export default Task2