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
              Culpa adipisicing mollit eiusmod qui enim reprehenderit laboris
              sunt excepteur occaecat pariatur sunt mollit. Ut dolore do
              consequat do proident cupidatat deserunt enim consectetur. Tempor
              exercitation non nostrud id excepteur magna aute sit labore. Amet
              elit id exercitation cillum et aliquip amet do duis laborum.
              Deserunt tempor ut excepteur veniam non sint ad reprehenderit.
            </p>
            <p className="tosBodyTitle">
              Laborum elit anim elit cupidatat voluptate laborum.
            </p>
            <p className="tosBody">
              Ullamco adipisicing sunt anim consectetur sunt culpa. Dolor
              occaecat mollit Lorem nostrud. Mollit voluptate excepteur
              cupidatat amet cillum. Ex dolore reprehenderit et consequat dolor
              esse in sit exercitation nulla. Exercitation sint laboris ad
              aliquip ullamco Lorem anim irure.
            </p>
            <p className="tosBodyTitle">
              Fugiat est aliquip qui laboris consequat culpa excepteur sit
              reprehenderit anim cillum qui mollit.
            </p>
            <p className="tosBody">
              Deserunt ut qui elit commodo. Occaecat laboris culpa non occaecat.
              Sunt dolore commodo commodo veniam minim culpa cillum. Cupidatat
              velit excepteur anim mollit laboris.
            </p>
            <div className="tosBodyList">
              <div className="tosBodyListItem">
                <NotInterestedIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Sunt esse sunt commodo nisi velit esse est. In commodo veniam
                  duis velit aute aliqua reprehenderit quis consectetur ut. Est
                  consectetur laboris aliqua cillum est et culpa consectetur
                  exercitation deserunt.
                </p>
              </div>
              <div className="tosBodyListItem">
                <NotInterestedIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Aliquip aliqua aliquip nulla Lorem eiusmod.
                </p>
              </div>
              <div className="tosBodyListItem">
                <NotInterestedIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Nulla id commodo commodo commodo qui cillum do dolore ullamco
                  mollit nostrud. Duis in nulla voluptate consectetur id labore
                  id labore magna aute deserunt in. Pariatur ex duis consectetur
                  aute consequat velit deserunt do elit anim pariatur.
                </p>
              </div>
              <div className="tosBodyListItem">
                <NotInterestedIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Incididunt do id nulla exercitation excepteur in Lorem sunt
                  eiusmod:
                </p>
              </div>
              <ul className="tosInnerBodyList">
                <li className="tosInnerBodyListItem">
                  Reprehenderit elit excepteur do labore minim mollit et minim
                  incididunt culpa id ullamco fugiat.
                </li>
                <li className="tosInnerBodyListItem">
                  Minim est magna aliqua non sint.
                </li>
                <li className="tosInnerBodyListItem">
                  Culpa cillum fugiat nostrud velit tempor commodo adipisicing
                  officia aute sunt id.
                </li>
                <li className="tosInnerBodyListItem">
                  Proident dolor reprehenderit reprehenderit sit irure
                  consectetur occaecat id labore.
                </li>
              </ul>
            </div>
            <p className="tosBody">
              Quis aliquip reprehenderit velit elit et do aliqua sunt excepteur.
              In tempor fugiat dolore ex sint consectetur.
            </p>
            <p className="tosBodyTitle">Lorem Ipsum</p>
            <p className="tosBody">
              Esse nostrud incididunt aute culpa consectetur velit veniam mollit
              minim. Pariatur laboris do culpa sunt eu officia. Ad sint veniam
              ea reprehenderit deserunt:
            </p>
            <div className="tosBodyList">
              <div className="tosBodyListItem">
                <CheckCircleOutlineIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Officia duis est dolore cillum irure incididunt minim
                  cupidatat exercitation qui ullamco.
                </p>
              </div>
              <div className="tosBodyListItem">
                <CheckCircleOutlineIcon style={tosIconStyle} />
                <p className="tosBodyListItemTxt">
                  Tempor anim veniam eu eu laboris voluptate anim ea quis et.
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
