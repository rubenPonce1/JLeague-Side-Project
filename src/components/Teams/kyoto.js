/*
Filename: kyoto.js
Date: 12/01/23
Authors: Ruben Ponce
Description: This is the team page for 
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Kyoto_Sanga from "../images/Team_Logos/Kyoto_Sanga_FC.png";
import { Link } from "react-router-dom";

export default function Kyoto() {
  return (
    <div className="kyoto">
      <h1 className="header">
        {" "}
        <img src={Kyoto_Sanga} alt="logo" className="team-page-logo"></img>
        Kyoto Sanga
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value"> 1922 </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Kyoto Shiko Club (1922-1993) <br />
            Kyoto Purple Sanga (1994-2006)
            <br />
            Kyoto Sanga FC (2007-present)
            <br />
            Nickname: Sanga
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            SANGA STADIUM by KYOCERA
            <br />
            Capacity: 21,600
            <br />
            <i class="fas fa-map-marker-alt"> </i> Kameoka-shi, Kyoto <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Kyoto Shiko Club: <br />
            Kansai Soccer League 5th tier (1969, 1971, 1979, 1988 )<br />
            All Japan Senior Football Championship (1988)
            <br />
            <br />
            Kyoto Purple Sanga:
            <br />
            J.League Division 2 (2001, 2005)
            <br />
            Emperor's Cup (2002)
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
