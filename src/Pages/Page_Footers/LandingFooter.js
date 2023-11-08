

function LandingFooter() {
    return (
    <div className="Landing_Footer">
        <ul className="PokeBall_Nav">
            <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Adjust" ><button>🔎 | Adjust       </button></li>
            <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Profile" ><button>📓 | Profile      </button></li>
            <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Contact" ><button>💬 | Contact    </button></li>
            <li className="PokeBall_Nav_Button" id="PokeBall_Nav_Button_Settings" ><button>⚙️ | Settings   </button></li>
        </ul>

        <div className="Landing_Footer_Bottom">
            <p>© 2021 StudioGlasses</p>
            <p>© 1998 The Pokemon Company</p>
            <small>
            "Lorem ipsum dolor sit amet,   
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </small>
        </div>
    </div>
    );
}

export default LandingFooter;