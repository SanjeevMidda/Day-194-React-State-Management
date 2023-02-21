import React from "react";
import "../styles.css"
import Child from "./Child";

export default function Sibling(){
    return(
        <div>
            <Child habit = "Running"/>
            <Child habit = "Rowing"/>
            <Child habit = "Swimming"/>
            <Child habit = "Squash"/>
        </div>
        
    )
}