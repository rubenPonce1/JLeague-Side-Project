/*
Filename: reysol.js
Date: 12/02/23
Authors: Ruben Ponce
Description: This is the team page for Kashiwa Reysol
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Reysol from "../images/Team_Logos/Kashiwa_Reysol.png";
import { Link } from "react-router-dom";

export default function Kashiwa() {
  return (
    <div className="rey">
      <h1 className="header">
        {" "}
        <img src={Reysol} alt="logo" className="team-page-logo"></img>
        Kashiwa Reysol
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value">
            {" "}
            1940 <br /> Original Eight
          </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Hitachi SC (1939-1992) <br />
            Kashiwa Reysol (1993-present) <br />
            Nickname: Rey, Taiyō-Ō (Sun King), Aurinegro (gold-and-black)
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            Sankyo Frontier Kashiwa Stadium ("Hitachidai")
            <br />
            Capacity: 15,900
            <br />
            <i class="fas fa-map-marker-alt"> </i> Kashiwa, Chiba <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Hitachi SC:
            <br />
            &emsp; JSL Division 1 (1972)
            <br />
            &emsp; JSL Division 2 (1990)
            <br />
            &emsp; Emperor's Cup (1972, 1975)
            <br />
            &emsp; JSL Cup (1976)
            <br />
            &emsp; All Japan Works Football Championship (1958, 1960)
            <br />
            &emsp; All Japan Inter-City Football Championship (1963)
            <br />
            <br />
            Kashiwa Reysol
            <br />
            &emsp; J1 League (2011)
            <br />
            &emsp; J2 League (2010, 2019)
            <br />
            &emsp; Emperor's Cup (2012)
            <br />
            &emsp; J. League Cup (1999, 2013)
            <br />
            &emsp; Japanese Super Cup (2012)
            <br />
            &emsp; Suruga Bank Championship (2014)
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Kashiwa Reysol</h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/eznc8Dnk5S8?si=gRCb2TsHHwqA7N56"
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
          Title: GET TO KNOW J.LEAGUE: Kashiwa Reysol
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title">
            Kashiwa Reysol Social Pages
          </div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/REYSOL_Official"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="rey_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title"> @REYSOL_Official </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/kashiwareysol_official/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="rey_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title">
                  {" "}
                  @kashiwareysol_official{" "}
                </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/user/KashiwaReysolChannel"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="rey_yt"
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
                href="https://www.tiktok.com/@kashiwareysol_official?is_from_webapp=1&sender_device=pc"
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
                <div className="social-media-title">
                  {" "}
                  @kashiwareysol_official{" "}
                </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.facebook.com/ReysolOfficial/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="***_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title"> @ReysolOfficial </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
