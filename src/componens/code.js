import React from "react";
import "./content.css";
import "./code.css";

function Code() {
  return (
    <section>
      <h2 className="head3">Code</h2>

      <a
        className="abutton"
        id="abuttoncode"
        href="https://github.com/NicoNeubauer"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>

      <div>
        <h3>HTML/CSS Bachelor page</h3>

        <p>
          Usability Catalog Summary Today we live in the era of the internet,
          and we spend more time there than ever before. But how is the
          usability on the web, especially on the pages we use the most? We
          think that these things are not well documented, and that is what we
          try to shine a light on in this thesis. How is a catalog like this
          supposed to be structured, and why? Join us as we go through relevant
          theory, what our methods were, and finally what findings we made.
        </p>

        <div className="grid4by4">
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
        </div>

        <div className="grid4by4">
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
        </div>
      </div>
      <div>
        <h3>React web project 3</h3>
        <p>
          <b>
            “Can we make education easier with a single solution as a website?”
          </b>
          This projects focus was to create a digital platform to make it easier
          for students and teachers/professors to find information about
          mobility and education abroad. There is good reason to think that
          education becomes even more important and relevant in the future as
          the world gets more complicated for every passing year. Therefore a
          lot of students want to do a little extra to become better, expand
          their current knowledge and push development in their degree field, so
          that they can do well in the work environment of the future and shape
          the world around them. This solution is supposed to be a tool that is
          useful for the education sector and students, so they can help each
          other with research, recommend schools abroad, and give students a
          place to connect with other students from the area they wish to move
          or are currently living in. This tool will also give them a platform
          in which they can trade or sell items such as books and other things,
          as this is a challenge a lot of people face when moving to a new
          place.
        </p>
        <div className="imgsingel">
          <img alt="test-img" src="img\code\code.PNG" />
        </div>
        <div className="grid4by4">
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
        </div>
      </div>

      <div>
        <h3>PHP Database-4</h3>
        <p>
          Dette prosjektet tar evg filer som input og bruker php til å lage nye
          filer brukeren kan spesifisere. Den viser data på forskjellige måter
          og kan sette sammen flere forskjellige filer samtidig.
        </p>
        <div className="imgsingel">
          <img alt="test-img" src="img\code\code.PNG" />
        </div>
        <div className="grid4by4">
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
        </div>
      </div>

      <div>
        <h3>Javascript Web Coding</h3>
        <p>
          javaScript er et høynivå-programmeringsspråk. Sammen med HTML og CSS
          er det en av grunnsteinene i moderne web-utvikling, og alle moderne
          nettlesere kan kjøre JavaScript-programmer uten utvidelser. Språket
          kan brukes både til komplekse webapplikasjoner og som et enklere
          skriptspråk.
        </p>
        <div className="imgsingel">
          <img alt="test-img" src="img\code\code.PNG" />
        </div>
        <div className="grid4by4">
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
          <img alt="test-img" src="img\code\code.PNG" />
        </div>
      </div>
    </section>
  );
}
export default Code;
