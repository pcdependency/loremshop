import React from "react";
import "../css/TOS.css";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const tosIconStyle = {
  height: "20px",
  width: "20px",
  fill: "#428ea1",
};

const TOS = () => {
  return (
    <div className="tosContainer">
      <div className="tosInnerContainer">
        <div className="tosPaperContainer">
          <div className="tosTitleContainer">
            <p className="tosTitle">Terms of Service</p>
          </div>
          <div className="tosBodyContainer">
            <p className="tosBodyTitle">Introduction</p>
            <p className="tosBody">
              By agreeing to these terms of service, you consent that you are at
              least 18 years of age or have permission and consent from a legal
              guardian to register and that your use of the website and product
              is in compliance with all applicable terms and regulations. We may
              change these terms of service at any given time without notifying
              you. The following terms and conditions govern all use of the
              Adverse Software Website(s) and all content, service(s) and
              products available at or through the Website.
            </p>
            <p className="tosBodyTitle">General Information</p>
            <p className="tosBody">
              Your use of our service(s) implies that you have read and accepted
              these Terms and Conditions. The website (all Adverse Software
              websites may hereafter be referred to, both individually and
              collectively, as "the website") from which you accessed this
              agreement, is provided to you subject to the conditions listed
              below. You are responsible for the actions of any other person who
              may utilize your access rights on the Adverse Software website.
            </p>
            <p className="tosBodyTitle">Grounds for Termination</p>
            <p className="tosBody">
              Your use of our service(s) must not violate any of the following
              restrictions, failure to comply may result in termination of your
              access to any or all parts of our service(s).
            </p>
            <div className="tosBodyList">
              <div className="tosBodyListItem">
                <NotInterestedIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Redistributing or attempting to redistribute your Adverse
                  Script license (i.e license sharing, selling your license,
                  etc).
                </p>
              </div>
              <div className="tosBodyListItem">
                <NotInterestedIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Attempting to chargeback or refund any service purchased from
                  Adverse Software.
                </p>
              </div>
              <div className="tosBodyListItem">
                <NotInterestedIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Distributing our service(s) to people who do not already have
                  access to our service(s).
                </p>
              </div>
              <div className="tosBodyListItem">
                <NotInterestedIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Analyzing Adverse Script software, including:
                </p>
              </div>
              <ul className="tosInnerBodyList">
                <li className="tosInnerBodyListItem">
                  Analysis of network authentication.
                </li>
                <li className="tosInnerBodyListItem">
                  Decompiling or disassembling any binaries downloaded from the
                  Adverse Script website.
                </li>
                <li className="tosInnerBodyListItem">
                  Finding methods to 'detect' our software for screensharing
                  purposes.
                </li>
                <li className="tosInnerBodyListItem">
                  Any analysis made under bad faith, or for malicious reasons.
                </li>
              </ul>
            </div>
            <p className="tosBody">
              We may at our sole discretion suspend or terminate your access to
              our service(s), with or without notice for any reason or no reason
              at all.
            </p>
            <p className="tosBodyTitle">Refund Policy</p>
            <p className="tosBody">
              You are entitled to a refund provided you contact us within 24
              hours of purchase, we have deemed the reason for refund as valid,
              and you have not violated any condition in our Grounds for
              Termination. Examples of valid reason are:
            </p>
            <div className="tosBodyList">
              <div className="tosBodyListItem">
                <CheckCircleOutlineIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Inability to use our service(s) due to incompatibility with
                  our software or other reasons that may be out of your limits.
                </p>
              </div>
              <div className="tosBodyListItem">
                <CheckCircleOutlineIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Dissatisfaction with our service(s).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TOS;
