import React, { useState } from "react";

function LandingNav() {
    const [state, setstate] = useState("pokeball_close");
    const content = () => setstate($state => $state === "pokeball_open" ? "pokeball_close" : "pokeball_open");

    const changePage = (e) => {
        localStorage.removeItem("page", e);
        console.log(localStorage.getItem("page"));
    }

    return (
        <div className="Landing_Nav">
            <div className="Landing_Nav_Top">
                <ul className={state === "pokeball_close" ? "invisible" : "PokeBall_Nav"} >
                    <li className={state === "pokeball_close" ? "invisible" : "PokeBall_Nav_Button"} id="PokeBall_Nav_Button_Home" >   <button onClick={changePage("/home")}>    🏠 | Home     </button></li>
                    <li className={state === "pokeball_close" ? "invisible" : "PokeBall_Nav_Button"} id="PokeBall_Nav_Button_Profile" >  <button onClick={changePage("/profile")}>    📓 | Profile    </button></li>
                    <li className={state === "pokeball_close" ? "invisible" : "PokeBall_Nav_Button"} id="PokeBall_Nav_Button_Contact" >  <button onClick={changePage("/contact")}>    ➕ |  Upload  </button></li>
                    <li className={state === "pokeball_close" ? "invisible" : "PokeBall_Nav_Button"} id="PokeBall_Nav_Button_Settings" > <button onClick={changePage("/settings")}>    ⚙️ | Settings   </button></li>
                </ul>
            </div>

            <button onClick={content} className={`Landing_Nav_Mid  ${state}`}>
                
            </button>
        </div>
    );
}

export default LandingNav;