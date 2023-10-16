// Imports
import './StyleRoot.css';
import  Landingpage  from './Page_Bodies/LandingPage';
import  LandingFooter  from './Page_Footers/LandingFooter';
import LandingNav from './Page_Navs/LandingNav';

function PageRoot() {

    return (
        <>
            <Landingpage />
            <LandingNav />
            <LandingFooter />
        </>
    );
}

export default PageRoot;