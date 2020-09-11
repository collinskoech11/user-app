import React from 'react';

function Hello(){
    const sayHello = () =>{
        console.log("Hello");
    };
    return(
        <div>
            <button onClick={sayHello}>sayHello</button>
        </div>
    );
}
export default Hello;