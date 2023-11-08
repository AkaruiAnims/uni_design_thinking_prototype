import React, { useState } from "react";
import pfp from "../assets/pfp.png";
import meme1 from "../assets/meme1.jpeg";
import meme2 from "../assets/meme2.jpeg";
import meme3 from "../assets/meme3.jpeg";
import meme4 from "../assets/meme4.jpeg";
import meme5 from "../assets/meme5.jpg";

function LandingPageContent( props ) {
    const [like_state, likestate] = useState("💔");
    const [save_state, savestate] = useState("📖");
    const like = () => likestate($like_state => $like_state === "❤️" ? "💔" : "❤️", alert ( like_state === "❤️" ? "You disliked this meme!" : "You liked this meme!"));
    const save = () => savestate($save_state => $save_state === "📓 " ? "📖" : "📓 ", alert ( save_state ===  "📓" ? "You unsaved this meme!" : "You saved this meme!"));
    const meme_array = [meme1, meme2, meme3, meme4, meme5];

    console.log( save_state ===  "📖");

    return (

        <div className="Page_Content">
            <div className="Page_Content_Top">
                <img src={pfp} alt="Profile" className="Inner_Content" />
            </div>

            <div className="Page_Content_Center">
                <img src={meme_array[props.name]} alt="Profile" className="Inner_Content" />
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