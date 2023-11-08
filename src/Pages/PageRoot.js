// Imports
import './StyleRoot.css';
import PokemonLogo from "././assets/International_Pokémon_logo.svg.png";
import  Landingpage    from './Page_Bodies/LandingPage';
import  LandingFooter  from './Page_Footers/LandingFooter';
import  LandingNav     from './Page_Navs/LandingNav';
import  ProfilePage     from './Page_Bodies/ProfilePage';
import  SettingsPage from './Page_Bodies/SettingsPage';
import  ContactPage from './Page_Bodies/ContactPage';

function PageRoot() {
const currentUrl = window.location.pathname;
const pagesArray = [
                    ["/home", <Landingpage key="home" />],
                    ["/profile", <ProfilePage key="profile" />],
                    ["/settings", <SettingsPage key="settings" />],
                    ["/contact", <ContactPage key="contact" />]
                    ];    
let rendered = [];

console.log(currentUrl);

pagesArray.forEach((page, index) => {
    if (currentUrl === page[0]) {
        rendered.push(pagesArray[index][1]);
    }    
});

    return (
        <>

        <img src={PokemonLogo} alt="pokemonLogo" className="Landing_Page_Logo" />
            {rendered}
            <LandingNav />
            <LandingFooter />
        </>
    );
}

export default PageRoot;