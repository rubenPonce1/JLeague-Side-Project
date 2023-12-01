/*
Filename: consa.js
Date: 12/1/23
Authors: Ruben Ponce
Description: This is the team page for Hookaido Consadole Sapporo
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import HCS from "../images/Team_Logos/Hokkaido_Consadole_Sapporo.png";
import { Link } from "react-router-dom";

export default function Hokkaido() {
  return (
    <div className="consa">
      <h1 className="header">
        {" "}
        <img src={HCS} alt="logo" className="team-logo"></img>
        Hokkaido Consadole Sapporo
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value"> 1935 </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Toshiba S.C. (1935) <br />
            Consadole Sapporo (1996) <br />
            Hokkaido Consadole Sapporo (2016) <br />
            Nickname: Consa
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            Sapporo Dome
            <br />
            Capacity: 42,065
            <br />
            <i class="fas fa-map-marker-alt"> </i> Sapporo, Hokkaido <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Toshiba S.C.: <br />
            Japan Soccer League Division 2/Japan Football League (1979, 1988)
            <br />
            All Japan Senior Football Championship (1977)
            <br />
            JSL Cup (1981)
            <br />
            <br />
            Consadole Sapporo
            <br />
            J.League Division 2/J2 League (1997, 2000, 2007)
            <br />
            <br />
            Hokkaido Consadole Sapporo:
            <br />
            J2 League (2016)
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header">
          {" "}
          Short Video of Hokkaido Consadole Sapporo
        </h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/KWSqxdzMyI8?si=3qTc4Lvcqi7PfpYJ"
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
          Title: GET TO KNOW J.LEAGUE: Hokkaido Consadole Sapporo
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title">
            Hokkaido Consadole Sapporo Social Pages
          </div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/consaofficial/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="consa_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title">@consaofficial</div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/hokkaido_consadole_sapporo/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="consa_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title">
                  {" "}
                  @hokkaido_consadole_sapporo{" "}
                </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/user/consadolesapporotv"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="consa_yt"
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
                href="https://www.tiktok.com/@hokkaidoconsadolesapporo/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="consa_tiktok"
                    className="social-media-img"
                    icon="fab fa-tiktok"
                  />
                </div>
                <div className="social-media-title">
                  {" "}
                  @hokkaidoconsadolesapporo{" "}
                </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.facebook.com/consadoleInternational/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="consa_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title">
                  {" "}
                  @consadoleInternational{" "}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
