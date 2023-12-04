/*
Filename: sanfre.js
Date: 12/03/23
Authors: Ruben Ponce
Description: This is the team page for Sanfrecce Hiroshima 
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Sanfre from "../images/Team_Logos/Sanfrecce_Hiroshima.png";
import { Link } from "react-router-dom";

export default function Sanfrecce() {
  return (
    <div className="sanfre">
      <h1 className="header">
        {" "}
        <img src={Sanfre} alt="logo" className="team-page-logo"></img>
        Sanfrecce Hiroshima
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value">
            {" "}
            1938 <br />
            "Original Ten"{" "}
          </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Toyo Kogyo Shukyu Club (1938-1970)
            <br />
            Toyo Kogyo Soccer Club (1971-1980)
            <br />
            Mazda Sports Club Toyo Kogyo Soccer Club (1981-1983)
            <br />
            Mazda Sports Club Soccer Club (1984-1985)
            <br />
            Mazda Soccer Club (1986-1992)
            <br />
            Sanfrecce Hiroshima (1993-present)
            <br />
            Nickname: Sanfrecce (Three arrows), Sanfre, Viola
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            EDION Stadium Hiroshima
            <br />
            Capacity: 36,894
            <br />
            <i class="fas fa-map-marker-alt"> </i> Asaminami Ward, Hiroshima{" "}
            <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Toyo Kogyo S.C.:
            <br />
            &emsp; Japan Soccer League ( 1965, 1966, 1967, 1968, 1970)
            <br />
            &emsp; Emperor's Cup (1965, 1967, 1969)
            <br />
            &emsp; All Japan Works Football Championship (1956, 1962)
            <br />
            &emsp; NHK Super Cup (1967)
            <br />
            Sanfrecce Hiroshima:
            <br />
            &emsp; J1 League (2012, 2013, 2015)
            <br />
            &emsp; J2 League (2008)
            <br />
            &emsp; J.League Cup (2022)
            <br />
            &emsp; Japanese Super Cup (2008, 2013, 2014, 2016)
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of ***** </h2>

        <div class="ratio ratio-16x9">
          <iframe src=" " title="YouTube video" allowFullScreen></iframe>
        </div>

        <div className="video-disc">
          Title of Channel:
          <Link className="video-chnl-link" to={"  "}>
            *** <br />
          </Link>
          Title: *****
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title">*** Social Pages</div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt=" *** _twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title"> @ *** </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt=" *** _ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title"> @ *** </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt=" *** _yt"
                    className="social-media-img"
                    icon="fab fa-youtube"
                  />
                </div>
                <div className="social-media-title"> Official Youtube </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt=" ** _tiktok"
                    className="social-media-img"
                    icon="fab fa-tiktok"
                  />
                </div>
                <div className="social-media-title"> @ *** </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt=" *** _facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title"> @*** </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
