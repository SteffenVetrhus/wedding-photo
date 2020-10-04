import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <div className="wedding-photo-contact">
      <div className="wedding-photo-contact-prices">
        <h2>Priser</h2>
        <p className="wedding-photo-contact-prices-text">
          Vi i Bryllupsfotograf Sør er beæret over at dere tenker på oss til en
          av de viktigste rollene på den store dagen deres. Om ønskelig så kan
          vi konaktes på sv@vetrhusdigital.no direkte.
        </p>
        <p className="">
          Priser starter fra 5 000,- for bilder i kirken samt bryllupsbilder på
          lokasjon og opp til 25 000,- for en hel dag fra morgen til kveld.
        </p>
        <p className="wedding-photo-contact-prices-text">
          Det er ønskelig at bryllupet er i Vennesla og omegn men vi kan også
          være tilgjengelig for oppdrag utenfor lokalområdet vårt. Det vil da
          komme en liten ekstra kostand for reise.
        </p>
      </div>
      <div className="wedding-photo-contact-form">
        <h2>Contact</h2>
        {/* <input type="text" placeholder="Fornavn"></input>
        <br></br>
        <input type="text" placeholder="Etternavn"></input>
        <br></br>
        <input type="text" placeholder="Epost"></input>
        <br></br>
        <input type="text" placeholder="Bryllupsdato"></input>
        <br></br>
        <input type="text" placeholder="Sted"></input>
        <br></br>
        <input type="textarea" placeholder="Melding"></input> */}
      </div>
    </div>
  );
}
export default Contact;
