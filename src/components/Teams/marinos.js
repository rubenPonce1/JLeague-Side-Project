/*
Filename: marinos.js
Date: 12/03/23
Authors: Ruben Ponce
Description: This is the team page for Yokohama F Marinos
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import YokohamaFMarinos from "../images/Team_Logos/Yokohama_F_Marinos.png";
import { Link } from "react-router-dom";

export default function FMarinos() {
  return (
    <div className="marinos">
      <h1 className="header">
        {" "}
        <img src={YokohamaFMarinos} alt="logo" className="team-page-logo"></img>
        Yokohama F·Marinos
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value"> 1972 <br/> Original 10</div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Nissan Motor Football Club (1972-1991)
            <br />
            Yokohama Marinos (1992-1998)<br />
            * Merger with Yokohama Flügels (1964-1998) *
            <br />
            Yokohama F·Marinos (1999-present)
            <br />
            Nickname: Marinos, Tricolor
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            Nissan Stadium
            <br />
            Capacity: 72,327
            <br />
            <i class="fas fa-map-marker-alt"> </i> Yokohama, Kanagawa <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
          Nissan Motor Football Club: <br />
            &emsp; Japan Soccer League Div 1 (1988, 1989)<br />
            &emsp; Emperor's Cup (1983, 1985, 1988, 1989, 1991)<br />
            &emsp; J.League Cup (1988, 1989, 1990)<br />
            &emsp; All Japan Senior Football Championship (1976)<br />
            &emsp; Asian Cup Winners' Cup (1991)<br />
            <br />
            Yokohama Flügels: <br />
            &emsp; Regional Promotion Series (1983)<br />
            &emsp; JSL Division 2 (1987)<br />
            &emsp; Emperor's Cup (1993, 1998)<br />
            &emsp; Asian Cup Winners' Cup (1994)<br />
            &emsp; Asian Super Cup (1995)<br />
            <br />
           Yokohama Marinos: <br />
            &emsp; J1 League (1995)<br />
            &emsp; Emperor's Cup (1992)<br />
            &emsp; Asian Cup Winners' Cup (1992)<br />
            <br />
            Yokohama F·Marinos: <br />
            &emsp; J1 League (2003, 2004, 2019, 2022)<br />
            &emsp; Emperor's Cup (2013)<br />
            &emsp; J.League Cup (2001)<br />
            &emsp; Japanese Super Cup (2003)<br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Yokohama F·Marinos </h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/RViNw7nOAQs?si=LS1qcwuuzbW4ewwM"
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
          Title: GET TO KNOW J.LEAGUE: Yokohama F·Marinos
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title"> Yokohama F·Marinos Social Pages</div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/prompt_fmarinos"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="marinos_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title"> @prompt_fmarinos </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/yokohamaf.marinos/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="marinos_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title"> @yokohamaf.marinos </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/user/yokohamafmarinos1972"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="marinos_yt"
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
                href="https://www.tiktok.com/@yokohamaf_marinos"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="marinos_tiktok"
                    className="social-media-img"
                    icon="fab fa-tiktok"
                  />
                </div>
                <div className="social-media-title"> @yokohamaf_marinos </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.facebook.com/yokohamafm"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="marinos_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title"> @yokohamafm </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
