import React, { useState } from "react";
import LandingPageContent from "./LandingPageContent";

function Landingpage( content_array ) {
    const rendered = [];
    for ( let i = 0; i < 10; i++) {
        rendered.push(<LandingPageContent key={i} />);
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