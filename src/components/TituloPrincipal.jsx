import React, { useState } from "react";

const HelloWorld = ({friend}) => {
    const [msj, setMsj] = useState("");
    return (
        <div>
            <h1>Hello {friend} {msj}!</h1>
            <button onClick={()=> setMsj('(from changed state)')}>Click me</button>
        </div>
    );
};

export default HelloWorld;