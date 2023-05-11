import React from 'react';
import { useState } from 'react'

export default function Counter(){
    const [counter, setCounter] = useState(0)

    function add(){
        setCounter(counter+1);
    }
    
    function substract(){
        setCounter(counter-1);
    }

    return<>
    
    <div>
        <h1 id='header'>Count: {counter}</h1>
        <button onClick={add}>Add</button>
        <button onClick={substract}>Subtract</button>
    </div>
    
    </>
}

