import { useState } from "react";
function Task2(){
    const [array_request, setArrayRequest] = useState("12, 45, 56")    
    const [string_request, setStringRequest] = useState("")    
    const [array_response, setArrayResponse] = useState("")
    
    const func = (array: string[], num: string) =>{
        console.log(num)
        // TODO надо изменить, чтобы возвращалась, строка через ", "
        return String(array)
    }

    const click = () => {
        let array_string: string[]

        const pattern1 = /^(\d+\s)+\d+$|^(\d+\s)+\d+$|^\d+\s/;
        const pattern2 = /^(\d+,\s)+\d+$/;
        if (pattern1.test(array_request)) {
            array_string = array_request.split(" ");
        } else if (pattern2.test(array_request)) {
            array_string = array_request.split(", ");
        } else{
            setArrayRequest("Ожидается массив");
            setArrayResponse("")
            return;
        }
        
        
        setArrayResponse(func(array_string, string_request))
    }
    
    return(
        <>
            <input
              type="text"
              name="request"
              value={array_request}
              onChange={(e) => setArrayRequest(e.target.value)}
              required
            ></input>
            <input
              type="text"
              name="request"
              value={string_request}
              onChange={(e) => setStringRequest(e.target.value)}
              required
            ></input>
            <button className="" onClick={click}>Ответ</button>
            
            <input
              type="text"
              name="request"
              value={array_response}
              readOnly
            ></input>
        </>
    )
}

export default Task2