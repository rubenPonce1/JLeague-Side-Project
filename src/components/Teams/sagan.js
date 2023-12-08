/*
Filename: sagan.js
Date: 12/03/23
Authors: Ruben Ponce
Description: This is the team page for Sagan Tosu
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Sagan_Tosu from "../images/Team_Logos/Sagan_Tosu.png";
import { Link } from "react-router-dom";

export default function Sagan() {
  return (
    <div className="sagan">
      <h1 className="header">
        {" "}
        <img src={Sagan_Tosu} alt="logo" className="team-page-logo"></img>
        Sagan Tosu
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value"> 1997 </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Sagan Tosu FC (1997-present)
            <br />
            <br />
            Nickname: Sagan (Sandstone), Magpies, "Tosu of Saga (Prefecture)"
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            EKIMAE REAL ESTATE STADIUM
            <br />
            Capacity: 24,130
            <br />
            <i class="fas fa-map-marker-alt"> </i> Tosu, Saga <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Sagan Tosu FC:
            <br />
            &emsp; J.League Division 2 [2nd place promotion] (2011)
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Sagan Tosu </h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/f8rojnUkK3g?si=l06inTZgkr-63eOL"
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
          Title: GET TO KNOW J.LEAGUE: Sagan Tosu
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title"> Sagan Tosu Social Pages</div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/saganofficial17"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="sagan_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title"> @saganofficial17 </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/sagantosu_official/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="sagan_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title"> @sagantosu_official </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/user/officialsagantosu"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="sagan_yt"
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
                href="https://www.facebook.com/people/%E3%82%B5%E3%82%AC%E3%83%B3%E9%B3%A5%E6%A0%96SAGANTOSU/100051575031755/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="sagan_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title"> @サガン鳥栖 (SAGANTOSU) </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
