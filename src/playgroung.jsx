import { useState,useEffect } from "react";  
export default function Playground(){
    const [data,setData] = useState(null)
    useEffect(() => {
        async function getData(){
            const des = await fetch("https://swapi.dev/api/people/1");
            const dat = await des.json();
            setData(dat);
            console.log("ggg");
            
        }
        getData();
    }, [])    
    return(
        <div>
            <h1>Playground</h1>
            <p> {JSON.stringify(data,"",2)} </p>
        </div>
    )
}