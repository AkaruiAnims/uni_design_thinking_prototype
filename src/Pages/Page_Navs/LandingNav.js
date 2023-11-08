import React, { useState } from "react";

function LandingNav() {
    const [state, setstate] = useState("pokeball_close");
    const content = () => setstate($state => $state === "pokeball_open" ? "pokeball_close" : "pokeball_open");

    return (
        <div className="Landing_Nav">
            <div className="Landing_Nav_Top">
                <ul className={state === "pokeball_close" ? "invisible" : "PokeBall_Nav"} >
                    <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Search" >   <a href="/home">        🏠 | Home     </a></li>
                    <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Profile" >  <a href="/profile">     📓 | Profile    </a></li>
                    <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Contact" >  <a href="/contact">     💬 | Contact    </a></li>
                    <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Settings" > <a href="/settings">    ⚙️ | Settings   </a></li>
                </ul>
            </div>

            <button onClick={content} className={`Landing_Nav_Mid  ${state}`}>
                
            </button>
        </div>
    );
}

export default LandingNav;