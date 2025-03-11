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
        <h1 className="center-h">Задание 3</h1>
        <div className="center-h">
            <div className="margin-r-55">
        <p>Введите ограничения по возрасту: </p>
        <div className="center-h margin-t-25">
            <input 
              type="text"
              name="request"
              value={params}
              onChange={(e) => setParams(e.target.value)}
              required
            ></input>
            </div>
            </div>
            <div className="center-v margin-t-25">
            <button onClick={click}>Ответ</button>
            </div>
            </div>
            <table>
                <thead>
                <tr>
                    <th className="c-1">Фамилия</th>
                    <th className="c-1">Имя</th>
                    <th className="c-1">Отчество</th>
                    <th className="c-1">Возраст</th>
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