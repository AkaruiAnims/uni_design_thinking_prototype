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
const originalUrl = window.location.origin;
const currentUrl = window.location.href;
const pagesArray = [
                    ["/home", <Landingpage key="home" />],
                    ["/profile", <ProfilePage key="profile" />],
                    ["/settings", <SettingsPage key="settings" />],
                    ["/contact", <ContactPage key="contact" />]
                    ];    
let rendered = [];

pagesArray.forEach((page, index) => {
    if (currentUrl === originalUrl+page[0]) {
        rendered = [];
        rendered.push(pagesArray[index][1]);
    }else {
        rendered = null;
    }
});

    return (
        <>

        <img src={PokemonLogo} alt="pokemonLogo" className="Landing_Page_Logo" />
            {rendered == null ? <Landingpage /> : rendered}
            <LandingNav />
            <LandingFooter />
        </>
    );
}

export default PageRoot;