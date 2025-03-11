import { useState } from "react";
function Task2(){
    const [array_request, setArrayRequest] = useState("Hello, world")    
    const [string_request, setStringRequest] = useState("")    
    const [array_response, setArrayResponse] = useState("")
    
    const func = (array: string[], separator: string) =>{
        let response = ""
        for(let i=0; i <array.length; i++){
            if (response == ""){
                response = String(array[i])
            }
            else{
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
        } else{
            setArrayResponse("Ожидается массив");
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