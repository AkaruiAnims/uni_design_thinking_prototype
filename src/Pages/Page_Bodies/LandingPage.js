import LandingPageContent from "./LandingPageContent";

function Landingpage( ) {
    window.history.pushState( 'Home', '', '/home');

    const rendered = [];
    let id_gen = 0;

    for (let x = 0; x < 2; x++) {
        for ( let i = 0; i < 5; i++) {
            id_gen++;
            rendered.push(<LandingPageContent name={`${i}`} key={id_gen} />);
        }
    }

    return (
    <div className="Landing_Page">
        <div className="Page_Body">

            {rendered}
            
        </div>
    </div>
    );
}

export default Landingpage;