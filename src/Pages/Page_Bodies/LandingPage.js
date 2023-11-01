import React, { useState } from "react";

function Landingpage( content_array ) {
    const [like_state, setstate] = useState("💔");
    const content = () => setstate($state => $state === "❤️" ? "💔" : "❤️");

    return (
    <div className="Landing_Page">
        <div className="Page_Body">

            <div className="Page_Content">
                <div className="Page_Content_Center">
                </div> 

                <div className="Page_Content_Buttons">
                    <ul>
                        <li><button onClick={content}>{`${like_state}`} | Like </button></li>
                        <li><button>📓 | Save       </button></li>
                        <li><button>💬 | Comment    </button></li>
                    </ul>
                </div>
            </div> 


        </div>
    </div>
    );
}

export default Landingpage;