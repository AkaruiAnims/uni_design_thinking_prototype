import React, { useState } from "react";

function LandingNav() {
    const [state, setstate] = useState("pokeball_close");
    const content = () => setstate($state => $state === "pokeball_open" ? "pokeball_close" : "pokeball_open");

    return (
        <div className="Landing_Nav">
            <div className="Landing_Nav_Top">

            </div>

            <button onClick={content} className={`Landing_Nav_Mid  ${state}`}>
                
            </button>
        </div>
    );
}

export default LandingNav;