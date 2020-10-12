import React from "react";

import "./Contact.css";
import Price from "./Price/Price";
function Contact() {
  const vielse = { id: 1, text: "Vielse" };
  const bryllupsBilde = {
    id: 2,
    text: "Bryllupsbilder på lokasjon etter kirken",
  };
  const prep = { id: 3, text: "Forberedelser med brud og brudgom" };
  const fest = { id: 4, text: "Middag og Festen" };
  const liten = {
    items: [vielse, bryllupsBilde],
    text: "Vi tar bilder i kirken og tar brudebildene etter kirken",
  };
  const medium = {
    items: [vielse, bryllupsBilde, prep],
    text:
      "Vi møter dere hos frisør og barberer for å ta bilder under forberedelsene, kirken og brudebildene etter kirken",
  };

  const stor = {
    items: [vielse, bryllupsBilde, prep, fest],
    text: "Vi er med hele dagen og kvelden",
  };
  return (
    <div className="wedding-photo-contact">
      <div className="wedding-photo-contact-prices">
        <h2>Bryllup</h2>
        <p className="wedding-photo-contact-prices-text">
          Vi i Bryllupsfotograf Sør er beæret over at dere tenker på oss til en
          av de viktigste rollene på den store dagen deres. Om ønskelig så kan
          vi kontaktes på{" "}
          <a
            className="wedding-link"
            href="mailto:steffen@bryllupsfotografsør.no"
          >
            steffen@bryllusfotografsør.no
          </a>{" "}
          direkte.
        </p>
        <p className=""></p>
        <p className="wedding-photo-contact-prices-text">
          Det er ønskelig at bryllupet er i Vennesla og omegn men vi kan også
          være tilgjengelig for oppdrag utenfor lokalområdet vårt. Det vil da
          komme en liten ekstra kostand for reise.
        </p>
        <div className="wedding-photo-prices-container">
          <Price title="Liten:" price="10 000,-" content={liten}></Price>
          <Price title="Medium:" price="15 000,-" content={medium}></Price>
          <Price title="Stor:" price="20 000,-" content={stor}></Price>
        </div>
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
