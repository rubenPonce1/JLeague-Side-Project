/*
Filename: cerzo.js
Date: 11/16/23
Authors: Ruben Ponce
Description: This is the team page for 
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Cerezo_Osaka from "../images/Team_Logos/Cerezo_Osaka.png";
import { Link } from "react-router-dom";

export default function Cerezo() {
  return (
    <div className="crz">
      <h1 className="header">
        {" "}
        <img src={Cerezo_Osaka} alt="logo" className="team-page-logo"></img>
        Cerezo Osaka
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value">
            1957 <br />
            Original Eight
          </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Yanmar Diesel(1957-1992) <br />
            Cerezo Osaka (1993-present)
            <br />
            Nickname: Sakura (cherry blossoms)
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            Yodoko Sakura Stadium <br />
            Capacity: 24,481 <br />
            <i class="fas fa-map-marker-alt"> </i> Higashisumiyoshi-ku, Osaka{" "}
            <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Yanmir Diesel: <br />
            &emsp; Japan Soccer League (1971, 1974, 1975, 1980)
            <br />
            &emsp; JSL Cup/J.League Cup (1973, 1983, 1984)
            <br />
            &emsp; Emperor's Cup (1968, 1970, 1974)
            <br />
            &emsp; Queen's Cup (1976) <br />
            <br />
            Cerezo Osaka:
            <br />
            &emsp; Japan Football League/J2 League (1994)
            <br />
            &emsp; J.League Cup (2017)
            <br />
            &emsp; Emperor's Cup (2017)
            <br />
            &emsp; Japanese Super Cup (2018)
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Cerezo Osaka </h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/FkCV7x68Tnw?si=01GHe4DK54kTDfJu"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-disc">
          Title of Channel:
          <Link
            className="video-chnl-link"
            to={"https://www.youtube.com/@JLEAGUEInternational"}
          >
            J.LEAGUE International <br />
          </Link>
          Title: GET TO KNOW J.LEAGUE: Cerezo Osaka
        </div>
      </Container>

      {/*This is the container for the team socials*/}
      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title">
            Cerezo Osaka Social Pages
          </div>
          <div class="social-media-hdr-title-underline" />
        </h2>

        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/crz_official"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="crz_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>

                <div className="social-media-title">@crz_official</div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/cerezo_osaka/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="***_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>

                <div className="social-media-title"> @cerezo_osaka </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/c/CerezoOsakaOfficialchannel"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="crz_yt"
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
                href="https://www.facebook.com/OfficialCerezoOsaka"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="crz_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>

                <div className="social-media-title"> @OfficialCerezoOsaka </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
