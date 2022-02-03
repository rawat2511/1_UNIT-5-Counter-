import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter : {count}</h1>

            <button onClick={() => setCount(count+1) }>INCREMENT</button>
            <button onClick={() => setCount(count-1) }>DECREMENT</button>

            <h3 style={{border: "1px solid black", padding: "4px", width:"120px", textAlign:"center", margin:"10px auto"}} onDoubleClick={() => setCount(count*2)}>DOUBLE</h3>
        </div>
    )
}

export default Counter;