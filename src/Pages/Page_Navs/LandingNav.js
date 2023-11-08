import React, { useState } from "react";

function LandingNav() {
    const [state, setstate] = useState("pokeball_close");
    const content = () => setstate($state => $state === "pokeball_open" ? "pokeball_close" : "pokeball_open");

    return (
        <div className="Landing_Nav">
            <div className="Landing_Nav_Top">
                <ul className={state === "pokeball_close" ? "invisible" : "PokeBall_Nav"} >
                    <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Adjust" ><button>🔎 | Adjust       </button></li>
                    <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Profile" ><button>📓 | Profile      </button></li>
                    <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Contact" ><button>💬 | Contact    </button></li>
                    <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Settings" ><button>⚙️ | Settings   </button></li>
                </ul>
            </div>

            <button onClick={content} className={`Landing_Nav_Mid  ${state}`}>
                
            </button>
        </div>
    );
}

export default LandingNav;