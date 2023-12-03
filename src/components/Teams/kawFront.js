/*
Filename: kawFront.js
Date: 12/01/23
Authors: Ruben Ponce
Description: This is the team page for Kawasaki Frontale
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Kawasaki_Frontale from "../images/Team_Logos/Kawasaki_Frontale.png";
import { Link } from "react-router-dom";

export default function Kawasaki() {
  return (
    <div className="kaw-fr">
      <h1 className="header">
        {" "}
        <img
          src={Kawasaki_Frontale}
          alt="logo"
          className="team-page-logo"
        ></img>
        Kawasaki Frontale
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value"> 1955 </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Fujitsu SC (1955-1996) <br />
            Kawasaki Frontale (1997-present) <br />
            Nickname: Grêmio from Japan, Azzurro Nero (Blue-black)
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            Kawasaki Todoroki Stadium
            <br />
            Capacity: 26,827
            <br />
            <i class="fas fa-map-marker-alt"> </i> Nakahara, Kawasaki, <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Fujitsu SC: <br />
            &emsp; Japan Soccer League Division 2 (1976)
            <br />
            &emsp; Kanto Soccer League (1968)
            <br />
            <br />
            Kawasaki Frontale: <br />
            &emsp; J1 League (2017, 2018, 2020, 2021)
            <br />
            &emsp; J2 League (1999, 2004)
            <br />
            &emsp; Emperor's Cup (2020)
            <br />
            &emsp; J.League Cup (2019)
            <br />
            &emsp; Japanese Super Cup (2019, 2021)
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Kawasaki Frontale</h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/LQbyMMFj25k?si=vH_739NEf8dO7n7G"
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
          Title: GET TO KNOW J.LEAGUE: Kawasaki Frontale
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title">
            Kawasaki Frontale Social Pages
          </div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/frontale_staff"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kaw-fr_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title">@frontale_staff</div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/kawasaki_frontale/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kaw-fr_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title"> @kawasaki_frontale </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/@frontalechannel/featured"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kaw-fr_yt"
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
                href="https://www.tiktok.com/@frontale.official"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kaw-fr_tiktok"
                    className="social-media-img"
                    icon="fab fa-tiktok"
                  />
                </div>
                <div className="social-media-title"> @frontale.official </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.facebook.com/kawasakifrontaleofficial/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="kaw-fr_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title">
                  {" "}
                  @kawasakifrontaleofficial{" "}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
