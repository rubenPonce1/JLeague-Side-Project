/*
Filename: shonan.js
Date: 12/03/23
Authors: Ruben Ponce
Description: This is the team page for Shonan Bellmare
*/

import React from "react";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Styles/TeamPage.css";
import "../Styles/IndivTeamPageStyle.css";
import Shonan_Bellmare from "../images/Team_Logos/Shonan_Bellmare.png";
import { Link } from "react-router-dom";

export default function Shonan() {
  return (
    <div className="shonan">
      <h1 className="header">
        {" "}
        <img src={Shonan_Bellmare} alt="logo" className="team-page-logo"></img>
        Shonan Bellmare
      </h1>

      {/*This is the container for the team info */}
      <div className="team-info">
        <div className="team-info-wrapper">
          <div className="info-title"> Info </div>

          <div className="info-item"> EST: </div>
          <div className="value"> *** </div>

          <div className="info-item">Team names: </div>
          <div className="info-value">
            **** <br />
            <br />
            <br />
            Nickname: **
          </div>

          <div className="info-item"> Stadium: </div>
          <div className="info-value">
            ***
            <br />
            Capacity: <br />
            <i class="fas fa-map-marker-alt"> </i> * <br />
          </div>

          <div className="info-item">Accomplishments: </div>
          <div className="info-value">
            <br />
            &emsp; <br />
            &emsp; <br />
            &emsp; <br />
            &emsp; <br />
            &emsp; <br />
            &emsp; <br />
            <br />
          </div>
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className="video-cntr">
        <h2 className="video-header"> Short Video of Shonan Bellmare </h2>

        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/5TRzGxDyGB8?si=9RIti5Gni9_n82ny"
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
          Title: GET TO KNOW J.LEAGUE: Shonan Bellmare
        </div>
      </Container>

      {/*This is the container for the team socials*/}

      <footer className="social-media">
        <h2 className="social-media-hdr">
          <div className="social-media-hdr-title">Shonan Bellmare Social Pages</div>
          <div class="social-media-hdr-title-underline" />
        </h2>
        <div className="social-media-area">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://twitter.com/bellmare_staff"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="shonan_twt"
                    className="social-media-img"
                    icon="fab fa-twitter"
                  />
                </div>
                <div className="social-media-title"> @bellmare_staff </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.instagram.com/shonan_bellmare/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="shonan_ig"
                    className="social-media-img"
                    icon="fab fa-instagram"
                  />
                </div>
                <div className="social-media-title"> @shonan_bellmare </div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://www.youtube.com/channel/UCc3FnR9YVLyd-c4_uWpzgtA"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="shonan_yt"
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
                href="https://www.tiktok.com/@bellmare_official"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="shonan_tiktok"
                    className="social-media-img"
                    icon="fab fa-tiktok"
                  />
                </div>
                <div className="social-media-title">@bellmare_official</div>
              </a>
            </li>

            <li className="social-media-item">
              <a
                className="social-media-value"
                href="https://ja-jp.facebook.com/teambellmare"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <FontAwesomeIcon
                    alt="shonan_facebk"
                    className="social-media-img"
                    icon="fab fa-facebook-f"
                  />
                </div>
                <div className="social-media-title"> @teambellmare </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
