/*
Filename: gamba.js
Date: 12/01/23
Authors: Ruben Ponce
Description: This is the team page for Gamba Osaka
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Gamba_Osaka from "../images/Team_Logos/Gamba_Osaka.png";
import { Link } from "react-router-dom";

export default function Gamba() {
  return (
    <div className="gamba">
      <h1 className="header">
        {" "}
        <img src={Gamba_Osaka} alt="logo" className="team-logo"></img>
        Gamba Osaka
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value"> 1980 <br /> Original 10</div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Matsushita Electric SC (1980-1991)
            <br />
            Gamba Osaka (1992-present) <br />
            Nickname: Nerazzurri (Black-and-Blues)
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            Panasonic Stadium Suita <br />
            Capacity: 39,694
            <br />
            <i class="fas fa-map-marker-alt"> </i> Suita, Osaka <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Matsushita Electric SC: <br />
            All Japan Senior Football Championship (1983)
            <br />
            JSL Division 2 (1985)
            <br />
            Emperor's Cup (1990)
            <br />
            <br />
            Gamba Osaka <br />
            J.League Division 1 (2005,2014) <br />
            J.League Division 2 (2013) <br />
            Emperor's Cup (2008, 2009, 2014, 2015)
            <br />
            J.League Cup (2007, 2014)
            <br />
            Japanese Super Cup (2007, 2015) <br />
            AFC Champions League (2008) <br />
            Pan-Pacific Championship (2008)
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Gamba Osaka</h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/iZm6uL9L0Tg?si=uNOxGRacYGNC3m73"
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
          Title: GET TO KNOW J.LEAGUE: Gamba Osaka
        </div>
      </Container>

      {/*This is the container for the team socials*/}
      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title">Gamba Osaka Social Pages</div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/GAMBA_OFFICIAL"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="gamba_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>

                <div className="social-media-title">@gamba_official</div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/gambaosaka_official/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="gamba_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>

                <div className="social-media-title"> @gambaosaka_official </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/user/GambaFamilyNet"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="gamba_yt"
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
                href="https://www.tiktok.com/@gambaosaka_official"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="***_tiktok"
                    className="social-media-img"
                    icon="fab fa-tiktok"
                  />
                </div>

                <div className="social-media-title"> @gambaosaka_official </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.facebook.com/GambaOsakaOfficial"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="gamba_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>

                <div className="social-media-title"> @GambaOsakaOfficial </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
