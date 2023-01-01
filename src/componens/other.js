import React from "react";
import "./content.css";
import "./other.css";

const Other = () => {
  return (
    <section>
      <h2 className="head2">Other</h2>

      <h3>Photo</h3>
      <p>
        Jeg har erfaring i foto både fra å ha det som hobby men også fra
        profesjonelt photostudio hvor jeg har gått i dybden på rigge lys og
        hvordan man setter på et bra bildet. Jeg har også noen erfaring i
        digital bilderedigering i blant annet adobe photoshop.
      </p>

      <div className="imgcon1">
        <img src="img\other\KoreaGasse3.JPG" alt="" />
        <img src="img\other\marin_lys.png" alt="" />
      </div>

      <div className="imgcon1">
        <img src="img\other\martin_grønn_øye.jpg" alt="" />
        <img src="img\other\flammer.jpg" alt="" />
      </div>

      <div className="imgcon1">
        <img src="img\other\skygge_tegning.jpg" alt="" />
        <img src="img\other\fargeblanding.jpg" alt="" />
      </div>

      <h3>Video</h3>
      <p>
        jeg kan også vise til mine ferdigheter med video opptak og redigering
        som jeg har fra en internship i en tysk mediebedrift hvor jeg har hatt
        muligheten på å være en del av en profesjonelt filmproduksjon.
      </p>

      <div className="vidcon1">
        <iframe
          src="https://www.youtube.com/embed/8Mgw8BlILsw"
          title="Interview Anne DE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/AykLmoq9JxY"
          title="Stop mo film"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};
export default Other;
