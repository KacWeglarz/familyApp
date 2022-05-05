import react, {useState} from "react";

function Nav(){
const [input, setInput] = useState('')

    return(
        <form className="input">
            <input type="text" 
            placeholder="maciek" 
            value="{input}" 
            name="text" 
            className="inputToDo"
            />
            <button className="button">Sent</button>

        </form>
    )
}

export default Nav
