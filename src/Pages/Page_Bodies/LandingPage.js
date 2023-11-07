import LandingPageContent from "./LandingPageContent";

function Landingpage( ) {
    const rendered = [];

    for (let x = 0; x < 2; x++) {
        for ( let i = 0; i < 5; i++) {
            rendered.push(<LandingPageContent name={`${i}`} key={i} />);
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