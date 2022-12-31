import React from "react";
import "./abuteMe.css";
const AbuteMe = () => {
  return (
    <>
      <div className="abuteMeB" />
      <section className="abuteMe">
        <h2 className="titel">About Me</h2>
        <article>
          <div className="right">
            <p>
              I am a German citizen that has lived in Norway for most of my
              life. This is the reason for me speaking and writing Norwegian,
              English, and German at a fluent level. In my spare time, I would
              like to say I am an active person that likes to work out, play
              games, and keep myself occupied with smaller projects.
            </p>
            <p>
              Already in middle school, I discovered my interests in design and
              web development. That is why I choose media and communication in
              my high school years. Here I started to learn the basics of media
              creation and some more complex topics like the composition of
              visual media.
            </p>
            <p>
              I have solid knowledge of the fundamental building blocks of the
              web including HTML, CSS, and javascript. In addition to that, I am
              experienced in working with programs like Figma, InDesign,
              Photoshop, and most other programs from the Adobe package.
            </p>
            <p>
              The Web development bachelor I have from NTNU(Norwegian University
              of Science and Technology) was mostly focused on Interaction
              design, with courses like Web Design, Color in Interface Design,
              and Design Methods and Usability. There was also a large focus on
              working with user testing in both qualitative and quantitative
              methods.
            </p>
          </div>
          <div className="left">
            <img src="img/abuteMe/meg.png" alt=""/>          
            <p className="info">
            E-mail: niconeubauer.me@gmail.com Tlf: 0047 98187978
          </p>
          </div>          

        </article>
        <div className="mySkills">
          <h2>My skills include </h2>

          <div className="iconBox">
            <img src="img/abuteMe/aiIcon.png" alt="" />
            <img src="img/abuteMe/idIcon.png" alt="" />
            <img src="img/abuteMe/xdIcon.png" alt="" />
            <img src="img/abuteMe/lrIcon.png" alt="" />
            <img src="img/abuteMe/psIcon.png" alt="" />
            <img src="img/abuteMe/prIcon.png" alt="" />
            <img src="img/abuteMe/figmaIcon.png" alt="" />
            <img src="img/abuteMe/htmlIcon.png" alt="" />
            <img src="img/abuteMe/cssIcon.png" alt="" />
            <img src="img/abuteMe/jsIcon.png" alt="" />
            <img src="img/abuteMe/reactIcon.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default AbuteMe;
