import React from "react";
import "./abuteMe.css";
const AbuteMe = () => {
  return (
    <>
      <div className="abuteMeB" />
      <section className="abuteMe">
        <h2 className="titel">Om meg</h2>
        <article>
          <div className="right">
            <p>
              Jeg er en tysk statsborger som har bodd mesteparten av livet mitt
              i Norge. På fritiden er jeg en aktiv person som liker å trene,
              spille dataspill og er alltid opptatt med forskjellige prosjekter
              som å designe nettsider og lære språk.
            </p>
            <p>
              Allerede på ungdomsskolen fant jeg fort interessen for å jobbe med
              design og webutvikling, og valgte derfor å gå videre med dette med
              Medier og kommunikasjon på videregående skole. Dette tok jeg et
              steg videre når jeg valgte å ta en Bachelor i Webutvikling ved
              NTNU.
            </p>
            <p>
              Jeg har solid kjennskap til byggesteinene i webutvikling, her
              referer jeg til HTML, CSS og JavaScript. I tillegg har jeg også
              god erfaring m ed programvare som Figma, InDesign, Photoshop og
              diverse annet fra Adobe pakken.
            </p>

            <p>
              Webutviklings studiet jeg tok ved NTNU gikk for det meste ut på
              interaksjonsdesign, med fag som Web Design, Color in Interface
              Design og Design Methods and Usability. I disse fagene var det
              stort fokus på brukertesting, kvantitative og kvalitative
              undersøkelser.
            </p>
          </div>
          <div className="left">
            <img src="img\abuteMe\IMG_0260.jpg" alt="" />
            <p className="info">
              E-mail: niconeubauer.me@gmail.com Tlf: 0047 98187978
            </p>
          </div>
        </article>
        <div className="mySkills">
          <h2>Programmer jeg kan</h2>

          <div className="iconBox">
            <img src="img\abuteMe\Adobe_Illustrator_CC_icon.svg.png" alt="" />
            <img src="img/abuteMe/idIcon.png" alt="" />
            <img src="img/abuteMe/xdIcon.png" alt="" />
            <img src="img/abuteMe/lrIcon.png" alt="" />
            <img src="img\abuteMe\Adobe_Photoshop_CC_icon.svg.png" alt="" />
            <img src="img/abuteMe/prIcon.png" alt="" />
            <img src="img\abuteMe\figmalogo.png" alt="" />
            <img src="img/abuteMe/htmlIcon.png" alt="" />
            <img src="img\abuteMe\cssimg.png" alt="" />
            <img src="img/abuteMe/jsIcon.png" alt="" />
            <img src="img/abuteMe/reactIcon.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default AbuteMe;
