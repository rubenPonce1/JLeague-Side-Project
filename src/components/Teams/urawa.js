/*
Filename: urawa.js
Date: 12/03/23
Authors: Ruben Ponce
Description: This is the team page for Urawa Red Diamonds
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Urawa_Red_Diamonds from "../images/Team_Logos/Urawa_Red_Diamonds.png";
import { Link } from "react-router-dom";

export default function Urawa() {
  return (
    <div className="reds">
      <h1 className="header">
        {" "}
        <img
          src={Urawa_Red_Diamonds}
          alt="logo"
          className="team-page-logo"
        ></img>
        Urawa Red Diamonds
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST:</div>
          <div className="value">
            {" "}
            1950 <br />
            "Original Ten"
          </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            Mitsubishi Motors FC (1950-1991)
            <br />
            Urawa Red Diamonds (1992-present)
            <br />
            Nickname: Reds, Red Devils
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            Saitama Stadium 2002
            <br />
            Capacity: 63,700
            <br />
            <i class="fas fa-map-marker-alt"> </i> Midori Ward, Saitama <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            Mitsubishi Motors FC:
            <br />
            &emsp; Japan Soccer League (1969, 1973, 1978, 1982)
            <br />
            &emsp; Japan Soccer League Division 2 (1989)
            <br />
            &emsp; Emperor's Cup (1971, 1973, 1978, 1980)
            <br />
            &emsp; JSL Cup/J.League Cup (1978, 1981)
            <br />
            &emsp; Japanese Super Cup (1979, 1980, 1983)
            <br />
            Urawa Red Diamonds:
            <br />
            &emsp; J1 League (2006)
            <br />
            &emsp; Emperor's Cup (2005, 2006, 2018, 2021)
            <br />
            &emsp; JSL Cup/J.League Cup (2003, 2016)
            <br />
            &emsp; Japanese Super Cup (2006, 2022)
            <br />
            &emsp; AFC Champions League (2007, 2017, 2022)
            <br />
            &emsp; J.League Cup / Copa Sudamericana Championship (2017)
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Urawa Red Diamonds </h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/pnNKmt50c2w?si=lF-y_daiCuA6qprp"
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
          Title: GET TO KNOW J.LEAGUE: Urawa Red Diamonds
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title">
            Urawa Red Diamonds Social Pages
          </div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/REDSOFFICIAL"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="reds _twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title"> @REDSOFFICIAL </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/urawaredsofficial/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="reds_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title"> @urawaredsofficial </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/c/URAWAREDSOFFICIALTV"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="reds_yt"
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
                href="https://music.apple.com/jp/curator/%E6%B5%A6%E5%92%8C%E3%83%AC%E3%83%83%E3%82%BA/1605906211"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="reds_tiktok"
                    className="social-media-img"
                    icon="fas fa-music"
                  />
                </div>
                <div className="social-media-title"> Apple Music </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/c/URAWAREDSOFFICIALTV"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="reds_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title"> @URAWAREDSOFFICIALTV </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
