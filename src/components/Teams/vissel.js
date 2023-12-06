/*
Filename: vissel.js
Date: 12/03/23
Authors: Ruben Ponce
Description: This is the team page for Vissel Kobe
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Vissel_Kobe from "../images/Team_Logos/Vissel_Kobe.png";
import { Link } from "react-router-dom";

export default function Vissel() {
  return (
    <div className="kobe">
      <h1 className="header">
        {" "}
        <img src={Vissel_Kobe} alt="logo" className="team-page-logo"></img>
        Vissel Kobe
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value"> 1966 </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Kawasaki Steel Soccer Club (1966-1994)
            <br />
            Vissel Kobe (1995-present)
            <br />
            Nickname: Ushi (cows), Vissel (victory and vessel)
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            NOEVIR Stadium Kobe
            <br />
            Capacity: 30,134
            <br />
            <i class="fas fa-map-marker-alt"> </i> Hyogo Ward, Kobe <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Kawasaki Steel Mizushima:
            <br />
            &emsp; Chūgoku Soccer League 5th Tier (1980, 1981, 1982, 1984, 1985)
            <br />
            <br />
            Vissel Kobe <br />
            &emsp; J1 League (2023)
            <br />
            &emsp; Emperor's Cup (2019)
            <br />
            &emsp; Japanese Super Cup (2020)
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Vissel Kobe </h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/7ERJ3LKe8cY?si=f-A6eWqFpwR1egSo"
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
          Title: GET TO KNOW J.LEAGUE: Vissel Kobe
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title"> Vissel Kobe Social Pages</div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/visselkobe"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kobe_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title"> @visselkobe </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/visselkobe/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kobe_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title"> @visselkobe </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/c/visselkobe"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kobe_yt"
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
                href="https://www.tiktok.com/@visselkobe_official"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kobe_tiktok"
                    className="social-media-img"
                    icon="fab fa-tiktok"
                  />
                </div>
                <div className="social-media-title"> @visselkobe_official </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.facebook.com/VISSELKOBE"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kobe_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title"> @VISSELKOBE </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
