import React, { useState } from "react";
import pfp from "../assets/pfp.png";
import meme1 from "../assets/meme1.jpeg";
import meme2 from "../assets/meme2.jpeg";
import meme3 from "../assets/meme3.jpeg";
import meme4 from "../assets/meme4.jpeg";
import meme5 from "../assets/meme5.jpg";

function LandingPageContent() {
    const [like_state, likestate] = useState("💔");
    const [save_state, savestate] = useState("📖");
    const like = () => likestate($state => $state === "❤️" ? "💔" : "❤️");
    const save = () => savestate($state => $state === "📓 " ? "📖" : "📓 ");
    const meme_array = [meme1, meme2, meme3, meme4, meme5];

    return (

        <div className="Page_Content">
            <div className="Page_Content_Top">
                <img src={pfp} alt="Profile" className="Inner_Content" />
            </div>

            <div className="Page_Content_Center">
                <img src={meme_array[(Math.floor(Math.random() * 4)+1)]} alt="Profile" className="Inner_Content" />
            </div> 

            <div className="Page_Content_Buttons">
                <ul>
                    <li><button onClick={like}>{`${like_state}`} | Like </button></li>
                    <li><button onClick={save}>{`${save_state}`} | Save       </button></li>
                    <li><button> 💬 | Comment    </button></li>
                </ul>
            </div>
        </div> 
    
    );
}


export default LandingPageContent;