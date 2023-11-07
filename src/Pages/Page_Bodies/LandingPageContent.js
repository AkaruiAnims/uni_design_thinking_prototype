import React, { useState } from "react";

function LandingPageContent() {
    const [like_state, setstate] = useState("💔");
    const content = () => setstate($state => $state === "❤️" ? "💔" : "❤️");

    return (
        <div className="Page_Content">
            <div className="Page_Content_Top">
                <img src="https://picsum.photos/200/300" alt="Profile" className="Inner_Content" />
            </div>

            <div className="Page_Content_Center">
                <img src="https://picsum.photos/200/300" alt="Profile" className="Inner_Content" />
            </div> 

            <div className="Page_Content_Buttons">
                <ul>
                    <li><button onClick={content}>{`${like_state}`} | Like </button></li>
                    <li><button>📓 | Save       </button></li>
                    <li><button>💬 | Comment    </button></li>
                </ul>
            </div>
        </div> 
    
    );
}


export default LandingPageContent;