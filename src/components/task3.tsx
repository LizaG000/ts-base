import { useState } from "react";
import data from "./../data/data.json"

type User = {
    'имя': string;
    'фамилия': string;
    'отчество': string;
    'возраст': number;
}

function Task3(){
    const [params, setParams] = useState('18')
    const [response, setResponse] = useState(data)
    const func = (data_: User[], filter: number) => {
        let filter_data: User[] = []
        for(let i=0; i<data_.length; i++){
            if(data_[i]['возраст'] >= filter){
                filter_data.push(data_[i])
            }
        }
        return filter_data
    }

    const click = () => {
        let filter: number = 0
        const pattern1 = /^\d+$/
        if (pattern1.test(params)){
            filter = Number(params)
        }
        else if (params == ""){
            filter = 0
        }
        else{
            setParams("Не верный формат данных!!!")
        }
        setResponse(func(data, filter))
    }
    
    return(
        <>
            <input
              type="text"
              name="request"
              value={params}
              onChange={(e) => setParams(e.target.value)}
              required
            ></input>
            <button className="" onClick={click}>Ответ</button>
            <table>
                <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Возраст</th>
                </tr>
                </thead>
                <tbody>
                {response.map((user:User, index:number) => (
                    <tr key={index}>
                        <th>{user['фамилия']}</th>
                        <th>{user['имя']}</th>
                        <th>{user['отчество']}</th>
                        <th>{user['возраст']}</th>
                    </tr>
                ))}
                </tbody>
            </table>
          
        </>
    )
}

export default Task3