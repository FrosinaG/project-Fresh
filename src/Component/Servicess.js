import React from "react";
import imgp1 from "../img/post1.jpg";
import imgp2 from "../img/post4.webp";
import imgp3 from "../img/post2.jpeg";

const Servisi = () => {
  return (
    <div className="serv">
      <div className="mis">
        <p>
          Being smart, being nice and making things happen are the three key
          ingredients that we truly believe make a quality partner. If one is
          missing, the other two are all but irrelevant !
        </p>
      </div>
      <div className="cont">
        <div className="cont-t">
          <h3>Be smart... </h3>
        </div>
        <div className="cont-i">
          <img src={imgp1} />
        </div>
      </div>
      <div className="cont">
        <div className="cont-i">
          {" "}
          <img src={imgp2} />
        </div>

        <div className="cont-t">
          {" "}
          <h3>Be nice...</h3>
        </div>
      </div>
      <div className="cont">
        <div className="cont-t">
          <h3>Make thinks happen...</h3>
        </div>
        <div className="cont-i">
          {" "}
          <img src={imgp3} />
        </div>
      </div>
      <div className="vis">
      <p>
        We look for a common-benefit solution for most situations, always acting
        with the long-term in mind. We have a balanced ego, act humanly and
        appreciate a good laugh. Faced with a problem we offer solutions, not
        observations or excuses. We value results, not office hours...
      </p></div>
    </div>
  );
};

export default Servisi;
