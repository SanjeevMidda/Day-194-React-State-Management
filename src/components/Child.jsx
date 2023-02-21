import React, {useState} from "react";
import "../styles.css";

export default function Child(props){

    let updator = props.addNew;
    console.log(updator);

    const [activity, setActivity] = useState(0);

    function newActivity(){
        setActivity(activity + 1);
    }

    return(
        <div>
            {/* <h1>{props.habit}{props.currentValue}</h1>
            <button onClick={updator}>+</button> */}

            <h1>{props.habit} {activity}</h1>
            <button onClick={newActivity}>+</button>
        </div>
    )
}