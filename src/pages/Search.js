import { useState } from "react";
import "../styles/Search.css"
const Articles = [
    {id:1 ,title : "Understaing the differnce between grid-template and grid-auto"},
    {id:2, title: " Recraeting the GitHub contribution Graph with CSS Grid Layout"},
    {id:3, title:"Understaing the grid"},
    {id:4, title: "GRID"},
    {id:5, title: "auto"},

];
function highlight(text, stext){
    //here we should return the searched word highlights.
}
export default function Search(){
    const[stext, setStext] = useState("");


    function handleChange(e){
        setStext(e.target.value);

    }
    const results = Articles.filter((a) =>{
        const s = stext.toLowerCase();
        return a.title.toLowerCase().includes(s);
    });


    return(
        <div>
            <h1>Search</h1>
            <input
            type="text"
            value={stext}
            onChange={handleChange}/>

            {results.map((ar) =>(
                <div key={ar.id}>
                <h2>{ar.title}</h2>
                </div>

            ))}
                
        </div>

    );

}