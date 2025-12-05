import React, { useState } from "react";

export default function ButtonCounter() {
    // Initialize counter state to 0
    const [count, setCount] = useState(0);

    return (
        <div>
            {/* Paragraph showing dynamic counter */}
            <p>Button clicked {count} times</p>

            {/* Button increments counter */}
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}
