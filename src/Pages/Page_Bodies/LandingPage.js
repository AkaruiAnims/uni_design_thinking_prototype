import LandingPageContent from "./LandingPageContent";
import PokemonLogo from ".././assets/International_Pokémon_logo.svg.png";

function Landingpage( ) {
    const rendered = [];

    for (let x = 0; x < 2; x++) {
        for ( let i = 0; i < 5; i++) {
            rendered.push(<LandingPageContent name={`${i}`} key={i} />);
        }
    }

    return (
    <div className="Landing_Page">
        <img src={PokemonLogo} alt="pokemonLogo" className="Landing_Page_Logo" />
        <div className="Page_Body">

            {rendered}
            
        </div>
    </div>
    );
}

export default Landingpage;